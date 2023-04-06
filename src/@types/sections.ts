export type InovationSectionItem = {
  headerImgPath?: string;
  headerTitle: string;
  contentImgPath?: string;
  contentTitle: string;
  contentBody: string;
  buttonText: string;
};

export type NavigationSection = {
  title: string;
  link: string;
};

export type SolutionCatetory = {
  title: string;
  solutions: string[];
  imgPath?: string;
};
