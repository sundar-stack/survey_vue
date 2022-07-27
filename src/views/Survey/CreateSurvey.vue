<template>
  <div class="register">
    <v-form class="form register__form" @submit="handleSubmitSurvey">
      <h1>Create Survey</h1>
      <v-text-field
        v-model="survey.title"
        label="Survey Title"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        v-model="survey.description"
        label="Survey Description"
        :rules="[rules.required]"
      ></v-text-field>
      <v-switch
        :label="`${survey.isPublished ? 'UnPublish Survey' : 'Publish Survey'}`"
        v-model="survey.isPublished"
        inset
        color="indigo darken-3"
      ></v-switch>
      <h1>ADD QUESTIONS TO SURVEY</h1>
      <div class="survey__questions--wrapper">
        <div class="add_question">
          <v-select
            :items="survey.questionOptions"
            v-model="survey.questionType"
            label="Select Question Type"
          ></v-select>
          <v-icon
            large
            color="blue"
            @click="handleAddQuestion"
            class="survey__icon"
            >mdi-plus</v-icon
          >
          <vue-collapsible-panel-group base-color="#32de84" accordion >
            <vue-collapsible-panel :expanded="false">>
              <template #title> Panel A Title </template>
              <template #content> Panel A Content </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">>
              <template #title> Panel B Title </template>
              <template #content> Panel B Content </template>
            </vue-collapsible-panel>
          </vue-collapsible-panel-group>
        </div>
        <div class="survey__question--wrapper">
          <div
            class="survey__question"
            v-for="(question, index) in survey.questions"
            :key="index"
          >
            <div class="survey__question--heading">
              <h3>
                Question Type - {{ question.question_type.toUpperCase() }}
              </h3>
              <h4>Question No - {{ index + 1 }}</h4>
            </div>

            <v-text-field
              v-model="question.title"
              label="Enter your question"
              :rules="[rules.required]"
            ></v-text-field>

            <!-- MULTIPLE CHOICE QUESTION-->
            <div v-if="question.question_type === 'multiple-choice'">
              <h5>
                ADD OPTION (maximum 4*)
                <v-icon
                  large
                  color="blue"
                  @click="handleAddOption(index)"
                  class="actions__icon"
                  >mdi-plus</v-icon
                >
              </h5>
              <div
                class="survey__question--options"
                v-for="(item, optionIndex) in question.options"
                :key="optionIndex"
              >
                <div class="survey__question--option">
                  <v-text-field
                    v-model="item.option"
                    :label="`Option ${optionIndex + 1}`"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-icon
                    large
                    color="red"
                    @click="handleDeleteOption(index, optionIndex)"
                    class="actions__icon"
                    >mdi-minus</v-icon
                  >
                </div>
              </div>
            </div>

            <div class="survey__question--bottom">
              <v-switch
                label="Required"
                v-model="question.required"
                color="red darken-3"
                class="required__switch"
              ></v-switch>
              <v-icon
                large
                color="red"
                class="actions__icon"
                @click="handleDeleteQuestion(index)"
              >
                mdi-delete-outline
              </v-icon>
            </div>
          </div>
        </div>
      </div>
      <button class="button__black">Create Survey</button>
    </v-form>
  </div>
</template>
<script>
import { FormTextBoxObj } from "./surveyHelper";
export default {
  data() {
    return {
      survey: {
        title: "",
        description: "",
        questions: [],
        isPublished: false,
        questionType: "",
        questionOptions: ["text-box", "multiple-choice", "rating", "paragraph"],
      },
      rules: {
        required: (value) => !!value || `Field Required !`,
      },
    };
  },
  methods: {
    handleAddQuestion() {
      let questions = [...this.survey.questions];
      switch (this.survey.questionType) {
        case "text-box":
          questions = [...questions, new FormTextBoxObj("text-box")];
          break;
        case "paragraph":
          questions = [...questions, new FormTextBoxObj("paragraph")];
          break;
        case "rating":
          questions = [...questions, new FormTextBoxObj("rating")];
          break;
        case "multiple-choice":
          questions = [
            ...questions,
            {
              ...new FormTextBoxObj("multiple-choice"),
              options: [
                {
                  option: "",
                },
              ],
            },
          ];
          break;
      }
      this.survey.questions = questions;
      console.log("questions", questions);
    },
    handleDeleteQuestion(id) {
      this.survey.questions = this.survey.questions.filter((_, i) => i !== id);
    },
    handleAddOption(id) {
      let questions = [...this.survey.questions];
      let currentQuestionOptions = questions[id].options;
      if (currentQuestionOptions.length >= 4) {
        return;
      }
      currentQuestionOptions = [
        ...currentQuestionOptions,
        {
          option: "",
        },
      ];
      this.survey.questions[id].options = currentQuestionOptions;
    },
    handleDeleteOption(questionId, optionId) {
      let questions = [...this.survey.questions];
      let currentQuestionOptions = questions[questionId].options;
      this.survey.questions[questionId].options = currentQuestionOptions.filter(
        (_, i) => i !== optionId
      );
    },
    handleSubmitSurvey(e) {
      e.preventDefault();
    },
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
