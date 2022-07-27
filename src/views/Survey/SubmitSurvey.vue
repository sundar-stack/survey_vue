<template>
  <div class="register">
    <h1>{{ survey.title }}</h1>
    <v-form
      class="form register__form"
      @submit="handleSubmitSurvey"
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="survey.email"
        label="Enter Your Email Id"
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-text-field
        v-model="survey.name"
        label="Enter Your User Name"
        :rules="[rules.required]"
      ></v-text-field>
      <h1>FILL ANSWERS TO SURVEY</h1>
      <div class="survey__questions--wrapper">
        <div class="survey__question--wrapper">
          <div
            class="survey__question"
            v-for="(question, index) in survey.questions"
            :key="index"
          >
            <div class="survey__question--heading">
              <h4>Q : {{ question.title.toUpperCase() }} ?</h4>
            </div>
            <v-text-field
              v-if="question.questionType === 'text-box'"
              v-model="question.response"
              :label="question.required ? 'Your Answer *' : 'Your Answer'"
              :rules="[question.required && rules.required]"
              clearable
              clear-icon="mdi-close-circle"
            ></v-text-field>
            <v-textarea
              v-if="question.questionType === 'paragraph'"
              :rules="[question.required && rules.required]"
              outlined
              clearable
              auto-grow
              rows="3"
              row-height="25"
              clear-icon="mdi-close-circle"
              name="input-7-4"
              :label="question.required ? 'Your Answer *' : 'Your Answer'"
              v-model="question.response"
            ></v-textarea>
            <!-- MULTIPLE CHOICE QUESTION-->
            <div v-if="question.questionType === 'multiple-choice'">
              <v-radio-group
                v-model="question.response"
                :rules="[question.required && rules.required]"
              >
                <v-radio
                  v-for="(item, index) in question.choice"
                  :key="index"
                  :label="item.choice"
                  :value="item.choice"
                  color="indigo darken-3"
                ></v-radio>
              </v-radio-group>
            </div>
            <v-card-text class="pt-0">
              <v-slider
                v-if="question.questionType === 'rating'"
                v-model="question.response"
                :rules="[
                  question.required &&
                    ((v) => !!v || 'Rating Response Required'),
                ]"
                label="Rate Your Question"
                max="10"
                step="1"
                thumb-label="always"
              ></v-slider>
            </v-card-text>
          </div>
        </div>
      </div>
      <button class="button__black">Submit Survey</button>
    </v-form>
  </div>
</template>
<script>
export default {
  props: ["surveyId"],
  data() {
    return {
      survey: {
        id: 2,
        name: "",
        email: "",
        title: "Space survey",
        description: "Space survey by emily",
        isPublished: true,
        questions: [],
      },
      value: 0,
      rules: {
        required: (value) => !!value || `Field Required !`,
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async handleSubmitSurvey(e) {
      e.preventDefault();
      console.log("final obj?????", this.survey);
      const formRes = await this.$refs.form.validate();
      if (formRes.valid) {
        console.log("user entered all fields");
        let surveyResponses = [];
        surveyResponses = this.survey.questions.map((question) => ({
          id: question.id,
          response: question.response,
        }));
        console.log("surveyResponses???", surveyResponses);
        const formApiData = {
          email: this.survey.email,
          name: this.survey.name,
          surveyId: this.surveyId,
          responses: surveyResponses,
        };
        console.log("formApiData???", formApiData);
      }
    },
  },
  created() {
    const apiResponse = [
      {
        id: 7,
        title: "select any one",
        required: false,
        questionType: "multiple-choice",
        choice: [
          {
            id: 4,
            choice: "1",
            questionId: 7,
          },
          {
            id: 5,
            choice: "2",
            questionId: 7,
          },
          {
            id: 6,
            choice: "3",
            questionId: 7,
          },
        ],
      },
      {
        id: 5,
        title: "email",
        required: true,
        questionType: "text-box",
        choice: [],
      },
      {
        id: 35,
        title: "Enter space in 1000 words",
        required: true,
        questionType: "paragraph",
        choice: [],
      },
      {
        id: 6,
        title: "name",
        required: true,
        questionType: "text-box",
        choice: [],
      },
      {
        id: 8,
        title: "give rating",
        required: false,
        questionType: "rating",
        choice: [],
      },
    ];
    const newArr = apiResponse.map((ele) => ({ ...ele, response: null }));
    this.survey.questions = newArr;
  },
};
</script>

<style>
.register__form {
  width: 90% !important;
}
.add_question {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
}
.survey__questions--wrapper {
  padding: 10px 0;
  border-top: 1px solid grey;
}
.survey__question--wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.survey__question {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(230, 221, 101);
  margin: 15px 0;
  padding: 10px 10px 5px 10px;
  box-shadow: 0px 15px 30px #3d3c3c2d;
  border-radius: 5px;
}
.survey__question--heading {
  background: #e9e6e6;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.survey__question--bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid rgb(230, 221, 101);
}
.survey__question--bottom .v-input,
.survey__question--bottom .v-input--horizontal {
  display: flex !important;
  width: 25% !important;
  flex: none !important;
}
.survey__question--option {
  display: flex;
  align-items: center;
}
.survey__icon {
  height: 40px;
  width: 40px;
  border: 1px solid rgb(97, 97, 204);
  font-size: 25px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
