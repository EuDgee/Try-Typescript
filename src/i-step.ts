

interface IStep {
  (data: IName,
   complete: (data: any) => void,
   cancel: (message: string, code?: number) => void)
      : void;
}
