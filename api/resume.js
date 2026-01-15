import fs from 'fs';
import path from 'path';
import { calculateExperience } from '../utils/experienceCalculator';

export default function handler(req, res) {
    try {
        // Calculate experience dynamically (updates every month automatically)
        const experience = calculateExperience(true);

        // Path to your static PDF file
        const filePath = path.join(process.cwd(), 'public/CV/Kathiravan_Senior_Frontend_Developer.pdf');

        // Read the PDF file
        const fileBuffer = fs.readFileSync(filePath);

        // Set headers to display inline (open in new tab) with dynamic filename
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="Kathiravan_Senior_Frontend_Developer_${experience}Yrs.pdf"`);
        res.setHeader('Cache-Control', 'no-cache'); // Prevents caching so it updates monthly

        // Send the PDF
        res.status(200).send(fileBuffer);
    } catch (error) {
        console.error('Error serving PDF:', error);
        res.status(500).json({ error: 'Failed to load resume' });
    }
}

export const config = {
    api: {
        bodyParser: false, // Important for serving binary files
        responseLimit: '10mb', // Adjust based on your PDF size
    },
};