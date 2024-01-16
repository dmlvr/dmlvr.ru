import { GetServerSideProps, NextApiRequest } from 'next';
import cookie from 'cookie';
import Main from '@/components/Main/Main';
import useThemeAndLang from '@/hooks/useThemeLang';
import getSetting from '@/utils/getSetting';
import { PagesProps } from '@/types/types';

export default function Home({ 
  darkTheme, 
  themeHandler, 
  cookiesDarkTheme,
  ruLang,
  ruLangHandler,
  cookiesRuLang
 }: PagesProps) {

  console.log(cookiesRuLang);

  useThemeAndLang({
    ruLangHandler,
    cookiesRuLang,
    cookiesDarkTheme,
    themeHandler,
    darkTheme
  })

  return (
    <Main darkTheme={darkTheme} ruLang={ruLang} />
  )
}

export const getServerSideProps: GetServerSideProps<{ 
  cookiesDarkTheme: boolean | null,
  cookiesRuLang: boolean
}> = async ({req}) => {

  const setting = getSetting(req as NextApiRequest);

  return { 
    props: { 
      ...setting
    } 
  };
}