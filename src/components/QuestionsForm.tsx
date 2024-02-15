import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import React, { FC } from "react";
import { useFetch } from "../hooks/useFetch";
import { Form } from "@quillforms/renderer-core";
import { SubmissionDispatchers } from "@quillforms/renderer-core/build-types/types";
import { API } from "../const/api.const";

registerCoreBlocks();

const QuestionsForm: FC = () => {
  const [questions, loading, error] = useFetch(API.fetchQuestions.url, API.fetchQuestions.method);

  return (
    <>
    {loading && <div className="bg-white w-full">Loading...</div>}
    {error && <p>Error: {error}</p>}
      {!!questions.length && (
        <div style={{ width: "100%", height: "60vh" }}>
          <Form
            formId={1}
            applyLogic={true}
            formObj={{
              blocks: questions,
              settings: {
                animationDirection: "vertical",
                disableWheelSwiping: false,
                disableNavigationArrows: false,
                disableProgressBar: false,
              },
              theme: {
                font: "Roboto",
                buttonsBgColor: "#9b51e0",
                logo: {
                  src: ""
                },
                questionsColor: "#000",
                answersColor: "#0aa7c2",
                buttonsFontColor: "#fff",
                buttonsBorderRadius: 25,
                errorsFontColor: "#fff",
                errorsBgColor: "#f00",
                progressBarFillColor: "#000",
                progressBarBgColor: "#ccc",
              }
            }}
            onSubmit={(data: Object, dispatchers: SubmissionDispatchers) => {
              setTimeout(() => {
                dispatchers.setIsSubmitting(false);
                dispatchers.completeForm();
              }, 500)
            }}
          />
        </div>
      )}
    </>
  );
}

export default QuestionsForm