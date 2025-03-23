import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()

})

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),
    mockIdRef:varchar('mockId').notNull(),
       
})



// Table for storing quiz questions and user responses for personality analysis
export const PersonalityFeedback = pgTable('personalityFeedback', {
    id: serial('id').primaryKey(),
    question: text('question').notNull(),          // Stores each question text
    answer: text('answer').notNull(),              // Stores user-selected answer
    userEmail: varchar('userEmail'),               // User email for tracking
    createdAt: varchar('createdAt'),               // Timestamp of response
    index: integer('index').notNull()              // Stores the index number for each question
});

  