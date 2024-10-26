import { Vaga } from '../../domain/models/vaga.model';

export const IVagasRepository = 'VagasRepository'

export interface VagasRepository {
  create(vaga: Vaga): Promise<Vaga>;
  findAll(): Promise<Array<Vaga>>;
  findById(id: string): Promise<Vaga>;
  deleteById(id: string): Promise<void>;
  search(params: any, tipoDeficiencia?: string): Promise<Array<Vaga>>;
  searchRecommended(params: string): Promise<Array<Vaga>>;
}
