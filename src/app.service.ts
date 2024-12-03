import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CadastroEmpresa } from './interface/cadastro-empresa';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaService){}

  getHello(): string {
    return 'Hello World!';
  }

  async atualizarEmpresa(attEmpresa: CadastroEmpresa){
    attEmpresa.empresa_nome = "Senac Produções";
    return await this.prismaService.empresa.create({
      data: attEmpresa
    })
  }

  
}
