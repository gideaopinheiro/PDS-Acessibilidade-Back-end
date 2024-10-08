import { Module } from "@nestjs/common";
import { ApplicationModule } from "../application/application.module";
import { DomainModule } from "../domain/domain.module";
import { VagasController } from "./controllers/vagas.controller";
import { UsuariosController } from "./controllers/usuarios.controller";

@Module({
  imports: [DomainModule, ApplicationModule],
  controllers: [VagasController, UsuariosController]
})
export class InfrastructureModule { }
