const path = require('path');
/* Импорт плагинов */
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/index.js', // Входная точка для JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'), // Директория для сборки
    filename: 'main.js', // Имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Загрузка CSS файлов
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
          'css-loader',
        ],
      },
      { // Изображения
        test: /\.(png|jpg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // Путь
        },
      },
      { // Шрифты
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
      filename: 'index.html',       // Выходной файл HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Папка для сервера разработки
    port: 8080,
    open: true,
  },
};
