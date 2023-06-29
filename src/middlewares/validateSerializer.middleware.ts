import { Request, Response, NextFunction } from "express";

export const validateSerializerMiddleware =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      // bloco try/catch para capturar erros específicos do yup
      try {
        // chamando o método validate
        const validatedData = await schema.validate(data, {
          //permite que você obtenha todos os erros de validação em uma única exceção, em vez de interromper a validação no primeiro erro encontrado
          abortEarly: false,
          // exclui as chaves que não estão no schema
          stripUnknown: true,
        });

        // adicionamos uma nova chave a requisição, com os dados validados do usuario. Precisamos adicionar ao Request, o tipo da chave que estamos adicionando aqui no middleware. Na pasta @types/express, no arquivo index.d.ts, vamos adicionar a chave a tipagem do express:
        req.validatedBody = validatedData;

        next();
      } catch (err: any) {
        // caso algum erro do yup aconteca, ele vai ser tratado e enviado ao usuario
        return res.status(400).json({
          error: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };
