'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitContact(data) {
    try {
        const contact = await prisma.contact.create({
            data: {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                message: data.message,
            },
        });
        return { success: true, contact };
    } catch (error) {
        console.error('Error submitting form:', error);
        throw new Error('Failed to submit contact form');
    } finally {
        await prisma.$disconnect();
    }
}


export async function subscribeToNewsletter(email) {
    try {
        const subscriber = await prisma.newsletterSubscriber.create({
            data: {
                email,
            },
        });
        return { success: true, subscriber };
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        throw new Error('Failed to subscribe to newsletter');
    } finally {
        await prisma.$disconnect();
    }
}