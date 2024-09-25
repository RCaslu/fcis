"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SendToDatabase = async (nome: string, email: string, telefone: string) => {
    return await prisma.userFCIS.create({
        data: {
            name: nome,
            email: email,
            whatsapp: telefone,
        },
    });
}

export default SendToDatabase;