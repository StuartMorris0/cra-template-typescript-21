interface Config {
  exampleSharedKey: string;
  exampleKey: string;
}

const qaOverrides: Partial<Config> = {
  exampleKey: 'QA ENV',
};
const prodOverrides: Partial<Config> = {
  exampleKey: 'PROD ENV',
};

const config = process.env.REACT_APP_STAGE === 'production' ? prodOverrides : qaOverrides;

const finalConfig: Partial<Config> = {
  // Add common config values here
  exampleSharedKey: 'Hello ',
  ...config,
};

export default finalConfig;
