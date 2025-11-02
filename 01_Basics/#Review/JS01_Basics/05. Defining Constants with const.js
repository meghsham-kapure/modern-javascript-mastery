const value = 12345;
// const value ='John DoeD'; //ERROR => Cannot redeclare block-scoped variable 'value' .
    // once declared it cant neither redeclare not redefined

const outerValue = 'I Am Outer value';
{

    const innerValue = "I Am Inner value";
    console.log
    (outerValue, "and", innerValue);
}

console.log(outerValue, "and",/* innerValue*/); //ERROR = > cant print value that is part of other block
