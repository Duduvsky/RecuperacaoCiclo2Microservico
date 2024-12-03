import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CadastroEmpresa } from './interface/cadastro-empresa';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger (AppController.name)

  @EventPattern('ola')
  getHello(@Payload() texto:string) {
    this.logger.log(texto)
  }

  @EventPattern('cadastro-empresa')
  cadastroEmpresa(@Payload() attEmpresa: CadastroEmpresa){
    this.logger.log(JSON.stringify(attEmpresa))
    return this.appService.atualizarEmpresa(attEmpresa)
  }
}
