export const plugins = ['effector/babel-plugin'];
export const env = {
  test: {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['@babel/transform-runtime', 'effector/babel-plugin'],
  },
};
