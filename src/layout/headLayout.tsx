import { HeadMain } from "../components/head/headMain"

type LayoutProps = {
    title: string;
    description: string;
    author: string;
    keywords?: string;
    children: React.ReactNode;
}

export const HeadLayout = (props: LayoutProps) => {
    return (
        <>
          <HeadMain
            title={props.title}
            description={props.description}
            author={props.author}
            keywords={props.keywords}
          />
          {props.children}
        </>
      )
}