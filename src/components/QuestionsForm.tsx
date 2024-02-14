import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import React, { FC, useEffect, useState, useMemo } from "react";
import { fetchQuestions } from "../fetch-api";
import { Form } from "@quillforms/renderer-core";
import { SubmissionDispatchers } from "@quillforms/renderer-core/build-types/types";

registerCoreBlocks();

const QuestionsForm: FC = () => {
  const [questions, setQuestions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  
  useMemo(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetchQuestions({
          url: '/questions',
          method: 'GET',
        });
        setQuestions(() => [...response.data]);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {questions.length && (
        <Form
        formId={1}
        applyLogic={true}
        formObj={{
          blocks: questions,
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: false
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
            progressBarBgColor: "#ccc"
          }
        }}
        onSubmit={(data: Object, dispatchers: SubmissionDispatchers) => {
          setTimeout(() => {
            dispatchers.setIsSubmitting(false);
            dispatchers.completeForm();
          }, 500)
        }}
      />
      )}
      
    </div>
  );
}

export default QuestionsForm