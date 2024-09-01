import React from 'react'
import InsightsDetails from './InsightsDetails';


const Heading = "Insights Discovery";
const strengths = [
  "Pays great attention to detail.",
  "Responsible, methodical, works well with data.",
  "Good powers of concentration. Quiet and conscientious.",
  "Prefers structure at work and home.",
  "Attention to detail.",
  "Good situational analysis.",
  "Prefers a 'Hands-on' approach to problem solving.",
  
];

const weaknesses = [
  "Takes things too seriously.",
  "Can be too self-critical.",
  "May have difficulty 'switching off' from work.",
  "Has difficulty in quick or unprepared articulation.",
  "Tends to clam up if not encouraged to express himself.",
  "Can be over-cautious.",
];


const Heading1 = "Managing Andy";
const left = [
  "Assignment to projects where logical thinking is required.",
  "Quiet time to recover after any 'noisy' activity.",
  "Encouragement to use his imagination more.",
  "Encouragement to think about broader issues and exercise more of his imagination.",
  "The opportunity to review the team's decisions.",
  "Projects with an element of 'detective' work.",
  "Occasional opportunities to improve his people skills.",
];

const right = [
  "Being asked to find the flaws in an argument.",
  "Rewards for his economy of effort.",
  "Being given every opportunity to 'get on with it'.",
  "Being able to make important decisions in his own time.",
  "Gathering and analysing technical information.",
  "Being encouraged to expose logical inconsistencies.",
  "Not having to change activities at short notice.",
  "Integrity from his superiors.",
];


const InsightDetailsComponent = () => {
  return (
    <>
      <InsightsDetails left={strengths} right={weaknesses} heading={Heading} />
      <InsightsDetails left={left} right={right} heading={Heading1} />
    </>
  );
}

export default InsightDetailsComponent