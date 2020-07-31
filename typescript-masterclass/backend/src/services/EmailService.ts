interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendEmail(request: MessageDTO): string;
}

class EmailService implements IEmailService {
  sendEmail({ to, message }: MessageDTO) {
    return `Email enviado para ${to.name}: ${message.subject}`;
  }
}

export default EmailService;
