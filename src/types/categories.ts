export interface SubjectCategory {
  id: number;
  subject_category_name: string;
  last_update_date: string;
  created_date: string;
}

export interface Category {
  id: number;
  test_category_name: string;
  last_update_date: string;
  created_date: string;
}

export type Test = {
  id: number;
  subject_category: {
    id: number;
    subject_category_name: string;
    last_update_date: string;
    created_date: string;
  };
  test_category: {
    id: number;
    test_category_name: string;
  };
  first_test: boolean;
  description: string;
  background_image: string;
  title: string;
};

export interface BaseQuestion {
  id: number;
  question_text: string;
  var_A_text: string;
  var_B_text: string;
  var_C_text: string;
  var_D_text: string;
  var_E_text: string;
  true_answer: string;
  question_number: number;
}

export type TestQuestion = BaseQuestion & {
  test: number;
  question_image?: string | null;
  var_A_image: string | null;
  var_B_image: string | null;
  var_C_image: string | null;
  var_D_image: string | null;
  var_E_image: string | null;
  additional_questions: string;
  last_update_date: string;
  created_date: string;
};

export type AllTest = {
  id: number;
  test_category: Category;
  subject_category: SubjectCategory;
  title: string;
  first_test: boolean;
  description: string;
  background_image: string;
  last_update_date: string;
  created_date: string;
  test_questions: TestQuestion[];
};

export type Instruction = {
  test:Test;
  instruction_title: string;
  instruction_image: string;
  id:number
};

export type TReading = {
  id: number;
  question_number: number;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  test: number;
};

export interface OkupTushunuu {
  id: number;
  name: string;
  description: string;
  created_at: string; // ISO date string
}

export interface QuestionReadingData extends BaseQuestion {
  okup_tushunuu: OkupTushunuu;
  question: number;
}