import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answersNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answersNumber} из {props.quizLength}</small>
    </p>

    <AnswersList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
)

export default ActiveQuiz