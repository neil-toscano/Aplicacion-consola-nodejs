interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage: string = "";
    for (let index = 0; index <= limit; index++) {
      outputMessage = outputMessage + `${base} x ${index} = ${index * base} \n`;
    }

    return outputMessage;
  }
}
