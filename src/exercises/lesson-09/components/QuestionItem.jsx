import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const [optionText, setOptionText] = useState({});
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');
    // Hint: Use SET_EDITING_QUESTION action
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });

    setWorkingText(question.question);
  };

  const handleCancelEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });

    setOptionText({});
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText },
    });

    handleCancelEdit();
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (confirmDelete) {
      dispatch({ type: 'DELETE_QUESTION', payload: { id: question.id } });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          <p>Question Type: {formatQuestionType(question.type)}</p>
        </span>

        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button
            className={styles['edit-btn']}
            onClick={isEditing ? handleCancelEdit : handleEdit}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <div className={styles['title-edit']}>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <div className={styles['title-actions']}>
              <button className={styles['save-btn']} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <div className={styles['title-edit']}>
                    <input
                      value={optionText[index] ?? option}
                      onChange={(e) => {
                        setOptionText({
                          ...optionText,
                          [index]: e.target.value,
                        });
                      }}
                    />
                    <div className={styles['title-actions']}>
                      <button
                        className={styles['save-btn']}
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_OPTION_TEXT',
                            payload: {
                              questionId: question.id,
                              optionIndex: index,
                              newText: optionText[index] ?? option,
                            },
                          })
                        }
                      >
                        Save
                      </button>
                      <button
                        className={styles['delete-btn']}
                        onClick={() =>
                          dispatch({
                            type: 'DELETE_OPTION_FROM_QUESTION',
                            payload: {
                              questionId: question.id,
                              optionIndex: index,
                            },
                          })
                        }
                        disabled={question.options.length <= 2}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>
          {isEditing && (
            <button
              className={styles['add-option-btn']}
              onClick={() => {
                const text = prompt('Enter new option:');
                if (text?.trim()) {
                  dispatch({
                    type: 'ADD_OPTION_TO_QUESTION',
                    payload: {
                      questionId: question.id,
                      optionText: text,
                    },
                  });
                }
              }}
            >
              + Add Option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
