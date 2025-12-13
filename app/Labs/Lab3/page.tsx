import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";

import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";

import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndexFunction from "./FindIndexFunction";
import FilterFunction from "./FilterFunction";
import JsonHouse from "./JsonHouse";

import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

import TodoList from "./todos/TodoList";

import Classes from "./Classes";
import Styles from "./Styles";
import ParameterizedComponents from "./ParameterizedComponents";

import Pathname from "./Pathname";
import TOC from "./TOC";
import PathParameters from "./PathParameters";


export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>

      {/* VARIABLES */}
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />

      {/* CONDITIONALS */}
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />

      {/* FUNCTIONS */}
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />

      {/* ARRAYS + JSON */}
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndexFunction />
      <FilterFunction />
      <JsonHouse />

      {/* SPREAD & DESTRUCTURING */}
      <Spreading />
      <Destructing />
      <FunctionDestructing />

      {/* TODO LIST */}
      <TodoList />

      {/* CLASSES & STYLES */}
      <Classes />
      <Styles />

      {/* PARAMETERIZED COMPONENTS & CHILDREN */}
      <ParameterizedComponents />

         {/* ROUTING / PATHNAME / PATH PARAMETERS */}
         <Pathname />
         <TOC />
        <PathParameters />
    </div>
  );
}
