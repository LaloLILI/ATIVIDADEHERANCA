import { PessoaFisica } from "./model/PessoaFisica"
import { PessoaJuridica } from "./model/PessoaJuridica"

const a2 = new PessoaJuridica(`Empresa XYZ`, `12.345.678/0001-01`);
a2.setNome(`Empreza ABC`);
a2.setCnpj(`99.999.999/0001-99`);
console.log(`Nome: ${a2.getNome()}, CNPJ: ${a2.getCnpj()}`);

const a1 = new PessoaFisica(`Miroslav Klose`, `201420142014`);
a1.setNome(`Wesley Sneijder`);
a1.setCpf(`707070707070`);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
