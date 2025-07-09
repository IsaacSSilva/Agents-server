import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/questions',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          questions: z.string().min(1),
        }),
      },
    },
    async ({ body, params }, reply) => {
      const { questions } = body;
      const { roomId } = params;

      const result = await db
        .insert(schema.questions)
        .values({ roomId, questions })
        .returning();

      const insertedQuestion = result[0];

      if (!insertedQuestion) {
        throw new Error('Failed to create new question.');
      }

      return reply.status(201).send({ questionId: insertedQuestion.questions });
    }
  );
};
