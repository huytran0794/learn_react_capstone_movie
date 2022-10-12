/* import packages */
import React, { useState } from "react";

/* import antd packages */
import { Steps } from "antd";
const { Step } = Steps;
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
const renderSteps = (currentStep = 0, steps = []) => {
  return steps.map((item, idx) => (
    <Step key={item.title + idx} title={item.title} />
  ));
};
export default function SectionBookingSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  return <Steps current={currentStep}>{renderSteps(currentStep, steps)}</Steps>;
}
