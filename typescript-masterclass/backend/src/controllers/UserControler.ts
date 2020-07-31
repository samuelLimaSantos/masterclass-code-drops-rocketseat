import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Samuel", email: "samuel@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    const email = emailService.sendEmail({
      to: { name: "Samuel Santos", email: "samuel@gmail.com" },
      message: { subject: "Bem-Vindo ao sistema", body: "Seja bem-vindo" },
    });

    return res.send(email);
  },
};
