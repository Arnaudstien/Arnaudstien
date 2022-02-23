import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = async (nickname: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/${nickname}/fewlines-education/repos`);
  const res = await response.json();
  //console.log("res$$$$$$$$$$$$$$$$$$$$$$$", res);
  //console.log("nickname$$$$$$$$$$$$$$$$$$$$$$$$$", nickname);
  return res.repos_url;
};

export const getRepos = async (url: string): Promise<string[]> => {
  //console.log("url $$$$$$$$$$$$$$$", url);
  const response = await fetch(`${url}`);
  const res = await response.json();
  //console.log("res$$$$$$$$$$", res);
  return res;
};

export const printRepos = async (array: number): Promise<string> => {
  try {
    console.log("url $$$$$$$$$$$$$$$", array);
    const response = await fetch("https://api.github.com/users/fewlines-education/repos");
    const res = await response.json();
    console.log("res$$$$$$$$$$", res);
    return res;
  } catch (err) {
    //console.log(err);
    return "erreur";
  }
};

export const printRepository = () => {
  // Code here
};

export const getProjectInformations = () => {
  // Code here
};
