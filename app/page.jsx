import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='red_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    PromptME is an open-source platform for modern world to discover, create and share their Real-Life experiences and help others in the similar scenearios to make the right decision
    </p>

    <Feed />
  </section>
);

export default Home;
