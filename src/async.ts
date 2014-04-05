

var sequence = function(steps: IStep[]) {
  return function(input: any,
                  complete: (data:any) => void,
                  cancel: (message: string, code?: number) => void) {

    var currentIndex = -1;
    var lastIndex = steps.length - 1;
    var context = this;

    function localComplete(output) {
      if (currentIndex < lastIndex) {
        steps[currentIndex += 1]
            .call(context, output, localComplete, cancel);
      } else {
        complete(output);
      }
    }

    localComplete(input);
  };
};
