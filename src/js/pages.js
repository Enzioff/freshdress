const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const hidden = fs.readFileSync("src/includes/hidden.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "index.html",
		inject: "body",
		title: "Главная FreshDress",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/product-card.html",
		filename: "product-card.html",
		inject: "body",
		title: "Карточка товара",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/catalog.html",
		filename: "catalog.html",
		inject: "body",
		title: "Каталог",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/delivery-info.html",
		filename: "delivery-info.html",
		inject: "body",
		title: "Доставка и оплата",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/return.html",
		filename: "return.html",
		inject: "body",
		title: "Возврат",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/guarantee.html",
		filename: "guarantee.html",
		inject: "body",
		title: "Гарантия",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/static-page-tabs.html",
		filename: "static-page-tabs.html",
		inject: "body",
		title: "Уход",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/cart.html",
		filename: "cart.html",
		inject: "body",
		title: "Корзина",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/favorite.html",
		filename: "favorite.html",
		inject: "body",
		title: "Избранное",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/order.html",
		filename: "order.html",
		inject: "body",
		title: "Оформление заказа",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/about.html",
		filename: "about.html",
		inject: "body",
		title: "О нас",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/news.html",
		filename: "news.html",
		inject: "body",
		title: "Новости",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/news-detail.html",
		filename: "news-detail.html",
		inject: "body",
		title: "Новости - детальная",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/faq.html",
		filename: "faq.html",
		inject: "body",
		title: "Часто задаваемые вопросы",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/contacts.html",
		filename: "contacts.html",
		inject: "body",
		title: "Контакты",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/lk-main.html",
		filename: "lk-main.html",
		inject: "body",
		title: "Личный кабинет - главная",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/lk-history.html",
		filename: "lk-history.html",
		inject: "body",
		title: "Личный кабинет - история",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/lk-history-detail.html",
		filename: "lk-history-detail.html",
		inject: "body",
		title: "Личный кабинет - история детальная",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/lk-personal.html",
		filename: "lk-personal.html",
		inject: "body",
		title: "Личный кабинет - личная информация",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/lk-feedback.html",
		filename: "lk-feedback.html",
		inject: "body",
		title: "Личный кабинет - обратная связь",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/lk-bonuses.html",
		filename: "lk-bonuses.html",
		inject: "body",
		title: "Личный кабинет - бонусные баллы",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/login.html",
		filename: "login.html",
		inject: "body",
		title: "FreshDress - Вход",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/register.html",
		filename: "register.html",
		inject: "body",
		title: "FreshDress - Регистрация",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/password-recovery.html",
		filename: "password-recovery.html",
		inject: "body",
		title: "FreshDress - Восстановление пароля",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/password-recovery-accept.html",
		filename: "password-recovery-accept.html",
		inject: "body",
		title: "FreshDress - Восстановление пароля",
		head,
		sectionHeader,
		sectionFooter,
		temp,
		hidden
	}),
];
