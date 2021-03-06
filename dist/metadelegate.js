;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Metadelegate = factory();
  }
}(this, function() {
/**
 * Дополнительные методы справочника Контрагенты
 *
 * Created 23.12.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author Evgeniy Malyarov
 * @module cat_partners
 */

$p.modifiers.push(
	function($p){

		var _mgr = $p.cat.Контрагенты;

		_mgr.form_obj = function(pwnd, attr){

		}

	}
);
$p.injected_data._mixin({"view_about.html":"<div class=\"md_column1300\">\r\n    <h1><i class=\"fa fa-info-circle\"></i> MetaDelegate - рабочее место торгового представителя</h1>\r\n    <p>MetaDelegate - это веб-приложение с открытым исходным кодом, разработанное компанией <a href=\"http://www.oknosoft.ru/\" target=\"_blank\">Окнософт</a> на базе фреймворка <a href=\"http://www.oknosoft.ru/metadata/\" target=\"_blank\">Metadata.js</a> и распространяемое под <a href=\"http://www.oknosoft.ru/programmi-oknosoft/metadata.html\" target=\"_blank\">коммерческой&nbsp;лицензией&nbsp;Окнософт</a>.<br />\r\n        Исходный код и документация доступны на <a href=\"https://github.com/oknosoft/metadelegate\" target=\"_blank\">GitHub <i class=\"fa fa-github-alt\"></i></a>.<br />\r\n        Приложение является веб-интерфейсом к типовым конфигурациям 1С (Управление торговлей 11.2, Комплексная автоматизация 2.0, ERP Управление предприятием 2.1) и предназначено для автоматизации работы торговых представителей и менеджеров по прожажам\r\n    </p>\r\n    <p>Использованы следующие библиотеки и инструменты:</p>\r\n\r\n    <h3>Серверная часть</h3>\r\n    <ul>\r\n        <li><a href=\"http://1c-dn.com/1c_enterprise/\" target=\"_blank\">1c_enterprise</a><span class=\"md_muted_color\">, ORM сервер 1С:Предприятие</span></li>\r\n        <li><a href=\"http://www.postgresql.org/\" target=\"_blank\">postgreSQL</a><span class=\"md_muted_color\">, мощная объектно-раляционная база данных</span></li>\r\n        <li><a href=\"https://nodejs.org/\" target=\"_blank\">node.js</a><span class=\"md_muted_color\">, серверная программная платформа, основанная на движке V8 javascript</span></li>\r\n        <li><a href=\"http://nginx.org/ru/\" target=\"_blank\">nginx</a><span class=\"md_muted_color\">, высокопроизводительный HTTP-сервер</span></li>\r\n    </ul>\r\n\r\n    <h3>Управление данными в памяти браузера</h3>\r\n    <ul>\r\n        <li><a href=\"https://github.com/agershun/alasql\" target=\"_blank\">alaSQL</a><span class=\"md_muted_color\">, база данных SQL для браузера и Node.js с поддержкой как традиционных реляционных таблиц, так и вложенных JSON данных (NoSQL)</span></li>\r\n        <li><a href=\"https://github.com/metatribal/xmlToJSON\" target=\"_blank\">xmlToJSON</a><span class=\"md_muted_color\">, компактный javascript модуль для преобразования XML в JSON</span></li>\r\n        <li><a href=\"https://github.com/SheetJS/js-xlsx\" target=\"_blank\">xlsx</a><span class=\"md_muted_color\">, библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS в браузере</span></li>\r\n    </ul>\r\n\r\n    <h3>UI библиотеки и компоненты интерфейса</h3>\r\n    <ul>\r\n        <li><a href=\"http://dhtmlx.com/\" target=\"_blank\">dhtmlx</a><span class=\"md_muted_color\">, кроссбраузерная библиотека javascript для построения современных веб и мобильных приложений</span></li>\r\n        <li><a href=\"https://github.com/eligrey/FileSaver.js\" target=\"_blank\">filesaver.js</a><span class=\"md_muted_color\">, HTML5 реализация метода saveAs</span></li>\r\n    </ul>\r\n\r\n    <h3>Графика</h3>\r\n    <ul>\r\n        <li><a href=\"https://fortawesome.github.io/Font-Awesome/\" target=\"_blank\">fontawesome</a><span class=\"md_muted_color\">, набор иконок и стилей CSS</span></li>\r\n    </ul>\r\n\r\n    <p>&nbsp;</p>\r\n    <h2><i class=\"fa fa-question-circle\"></i> Вопросы</h2>\r\n    <p>Если обнаружили ошибку, пожалуйста,\r\n        <a href=\"https://github.com/oknosoft/metadelegate/issues/new\" target=\"_blank\">зарегистрируйте вопрос в GitHub</a> или\r\n        <a href=\"http://www.oknosoft.ru/metadata/#page-118\" target=\"_blank\">свяжитесь с разработчиком</a> напрямую<br />&nbsp;</p>\r\n\r\n</div>","view_balance.html":"<div class=\"md_column1300\">\r\n    <h1><i class=\"fa fa-info-circle\"></i> Отчет</h1>\r\n    <p>\r\n        Здесь будет отчет с подробной информацией по клиенту, текущим заказам и взаиморасчетам\r\n    </p>\r\n\r\n</div>","view_settings.html":"<div class=\"md_column1300\">\r\n    <h1><i class=\"fa fa-cogs\"></i> Настройки</h1>\r\n    <p>Параметры подключения к серверу 1С</p>\r\n\r\n    <div class=\"md_column320\" name=\"form1\" style=\"max-width: 420px;\"><div></div></div>\r\n\r\n</div>","create_tables.sql":"USE md;\nCREATE TABLE IF NOT EXISTS `areg_СвободныеОстатки` (`Номенклатура` CHAR, `Характеристика` CHAR, `Склад` CHAR, `ВНаличии` FLOAT, `ВРезервеСоСклада` FLOAT, `ВРезервеПодЗаказ` FLOAT, PRIMARY KEY (`Номенклатура`, `Характеристика`, `Склад`));\nCREATE TABLE IF NOT EXISTS `areg_РасчетыСКлиентами` (`АналитикаУчетаПоПартнерам` CHAR, `ЗаказКлиента` CHAR, `ЗаказКлиента_T` CHAR, `Валюта` CHAR, `Сумма` FLOAT, `КОплате` FLOAT, `Оплачивается` FLOAT, `КОтгрузке` FLOAT, `Отгружается` FLOAT, PRIMARY KEY (`АналитикаУчетаПоПартнерам`, `ЗаказКлиента`, `Валюта`));\nCREATE TABLE IF NOT EXISTS `areg_ЗаказыКлиентов` (`ЗаказКлиента` CHAR, `ЗаказКлиента_T` CHAR, `Номенклатура` CHAR, `Характеристика` CHAR, `КодСтроки` INT, `Склад` CHAR, `Серия` CHAR, `Заказано` FLOAT, `КОформлению` FLOAT, `Сумма` FLOAT, PRIMARY KEY (`ЗаказКлиента`, `Номенклатура`, `Характеристика`, `КодСтроки`, `Склад`, `Серия`));\nCREATE TABLE IF NOT EXISTS `ireg_$log` (`date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR, PRIMARY KEY (`date`, `sequence`));\nCREATE TABLE IF NOT EXISTS `ireg_meta_objects` (`class_name` CHAR, `meta` JSON, `meta_patch` JSON, `ref` CHAR, PRIMARY KEY (`class_name`));\nCREATE TABLE IF NOT EXISTS `ireg_ШтрихкодыНоменклатуры` (`Штрихкод` CHAR, `Номенклатура` CHAR, `Характеристика` CHAR, `Упаковка` CHAR, PRIMARY KEY (`Штрихкод`));\nCREATE TABLE IF NOT EXISTS `ireg_ЦеныНоменклатуры` (`Номенклатура` CHAR, `ВидЦены` CHAR, `Характеристика` CHAR, `Цена` FLOAT, `Упаковка` CHAR, `Валюта` CHAR, PRIMARY KEY (`Номенклатура`, `ВидЦены`, `Характеристика`));\nCREATE TABLE IF NOT EXISTS `ireg_КорзинаПокупателя` (`ОбъектАвторизации` CHAR, `ОбъектАвторизации_T` CHAR, `Номенклатура` CHAR, `Характеристика` CHAR, `Упаковка` CHAR, `НоменклатураНабора` CHAR, `ХарактеристикаНабора` CHAR, `КоличествоУпаковок` FLOAT, `Цена` FLOAT, PRIMARY KEY (`ОбъектАвторизации`, `Номенклатура`, `Характеристика`, `Упаковка`, `НоменклатураНабора`, `ХарактеристикаНабора`));\nCREATE TABLE IF NOT EXISTS `ireg_ИнтеграцияСинонимы` (`ИмяВ1С` CHAR, `ИмяВJS` CHAR, PRIMARY KEY (`ИмяВ1С`));\nCREATE TABLE IF NOT EXISTS `ireg_ИнтеграцияСессии` (`ИдентификаторБраузера` CHAR, `Одобрено` BOOLEAN, `ТекущихЗапросов` INT, `Запросов` INT, `ПоследняяАктианость` Date, `ГеоIP` CHAR, PRIMARY KEY (`ИдентификаторБраузера`));\nCREATE TABLE IF NOT EXISTS `ireg_ИнтеграцияМетаданные` (`class_name` CHAR, `class_name_T` CHAR, `cache` CHAR, `hide` BOOLEAN, `lc_changed_base` INT, `irest_enabled` BOOLEAN, `reg_type` CHAR, `meta` CHAR, `meta_patch` CHAR, PRIMARY KEY (`class_name`));\nCREATE TABLE IF NOT EXISTS `ireg_ИнтеграцияЛимиты` (`ОбластьДанных` INT, `ЛимитСессий` INT, `ЛимитЗапросов` INT, `ЛимитЗапросовНаПользователя` INT, `ДоступЗапрещен` BOOLEAN, `ПричинаБлокировки` CHAR, PRIMARY KEY (`ОбластьДанных`));\nCREATE TABLE IF NOT EXISTS `ireg_integration_links_cache` (`identifier` CHAR, `conformity` CHAR, `conformity_T` CHAR, `identifier_presentation` CHAR, PRIMARY KEY (`identifier`));\nCREATE TABLE IF NOT EXISTS `ireg_ИнтеграцияДатыУдаления` (`ref` CHAR, `ИдентификаторТипа` CHAR, `lc_changed` INT, `class_name` CHAR, PRIMARY KEY (`ref`, `ИдентификаторТипа`));\nCREATE TABLE IF NOT EXISTS `ireg_ИнтеграцияДатыИзменения` (`ref` CHAR, `ref_T` CHAR, `lc_changed` INT, `class_name` CHAR, `obj` JSON, PRIMARY KEY (`ref`));\nCREATE TABLE IF NOT EXISTS `doc_УстановкаЦенНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Ответственный` CHAR, `Комментарий` CHAR, `Согласован` BOOLEAN, `ДокументОснование` CHAR, `ДокументОснование_T` CHAR, `Статус` CHAR, `ts_Товары` JSON, `ts_ВидыЦен` JSON, `ts_НаборыЗначенийДоступа` JSON);\nCREATE TABLE IF NOT EXISTS `doc_РеализацияТоваровУслуг` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Организация` CHAR, `Контрагент` CHAR, `СуммаДокумента` FLOAT, `Партнер` CHAR, `Склад` CHAR, `Комментарий` CHAR, `Договор` CHAR, `ts_Товары` JSON, `ts_extra_fields` JSON, `ts_РасшифровкаПлатежа` JSON);\nCREATE TABLE IF NOT EXISTS `doc_РасходныйКассовыйОрдер` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Организация` CHAR, `СуммаДокумента` FLOAT, `Контрагент` CHAR, `Комментарий` CHAR, `ts_РасшифровкаПлатежа` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `doc_ПриходныйКассовыйОрдер` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Организация` CHAR, `СуммаДокумента` FLOAT, `Контрагент` CHAR, `Комментарий` CHAR, `ts_РасшифровкаПлатежа` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `doc_ПоступлениеБезналичныхДенежныхСредств` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Организация` CHAR, `СуммаДокумента` FLOAT, `Контрагент` CHAR, `Комментарий` CHAR, `ts_РасшифровкаПлатежа` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `doc_ОперацияПоПлатежнойКарте` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Организация` CHAR, `Контрагент` CHAR, `СуммаДокумента` FLOAT, `Комментарий` CHAR, `ts_РасшифровкаПлатежа` JSON);\nCREATE TABLE IF NOT EXISTS `doc_ЗаказКлиента` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Партнер` CHAR, `Контрагент` CHAR, `Организация` CHAR, `Соглашение` CHAR, `Сделка` CHAR, `Валюта` CHAR, `СуммаДокумента` FLOAT, `ГрафикОплаты` CHAR, `ЖелаемаяДатаОтгрузки` Date, `Склад` CHAR, `ЦенаВключаетНДС` BOOLEAN, `Менеджер` CHAR, `ДополнительнаяИнформация` CHAR, `ДокументОснование` CHAR, `ДокументОснование_T` CHAR, `НеОтгружатьЧастями` BOOLEAN, `Статус` CHAR, `МаксимальныйКодСтроки` INT, `ДатаСогласования` Date, `Согласован` BOOLEAN, `ФормаОплаты` CHAR, `БанковскийСчет` CHAR, `БанковскийСчетКонтрагента` CHAR, `Касса` CHAR, `СуммаАвансаДоОбеспечения` FLOAT, `СуммаПредоплатыДоОтгрузки` FLOAT, `ДатаОтгрузки` Date, `АдресДоставки` CHAR, `НалогообложениеНДС` CHAR, `СкидкиРассчитаны` BOOLEAN, `ХозяйственнаяОперация` CHAR, `Комментарий` CHAR, `НомерПоДаннымКлиента` CHAR, `ДатаПоДаннымКлиента` Date, `Грузоотправитель` CHAR, `Грузополучатель` CHAR, `БанковскийСчетГрузоотправителя` CHAR, `БанковскийСчетГрузополучателя` CHAR, `ГруппаФинансовогоУчета` CHAR, `КартаЛояльности` CHAR, `Договор` CHAR, `Подразделение` CHAR, `Автор` CHAR, `Автор_T` CHAR, `ПорядокРасчетов` CHAR, `Назначение` CHAR, `СпособДоставки` CHAR, `ПеревозчикПартнер` CHAR, `ЗонаДоставки` CHAR, `ВремяДоставкиС` Date, `ВремяДоставкиПо` Date, `АдресДоставкиПеревозчика` CHAR, `АдресДоставкиЗначенияПолей` CHAR, `АдресДоставкиПеревозчикаЗначенияПолей` CHAR, `ДополнительнаяИнформацияПоДоставке` CHAR, `КонтактноеЛицо` CHAR, `Руководитель` CHAR, `ГлавныйБухгалтер` CHAR, `ВернутьМногооборотнуюТару` BOOLEAN, `СрокВозвратаМногооборотнойТары` INT, `СостояниеЗаполненияМногооборотнойТары` CHAR, `СуммаВозвратнойТары` FLOAT, `НазначениеПлатежа` CHAR, `ТребуетсяЗалогЗаТару` BOOLEAN, `priority` CHAR, `ИдентификаторПлатежа` CHAR, `ОсобыеУсловияПеревозки` BOOLEAN, `ОсобыеУсловияПеревозкиОписание` CHAR, `НаправлениеДеятельности` CHAR, `ts_Товары` JSON, `ts_ЭтапыГрафикаОплаты` JSON, `ts_СкидкиНаценки` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `doc_ВозвратТоваровОтКлиента` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, posted boolean, date Date, number_doc CHAR, `Организация` CHAR, `Партнер` CHAR, `Контрагент` CHAR, `СуммаДокумента` FLOAT, `Склад` CHAR, `Комментарий` CHAR, `Договор` CHAR, `ts_Товары` JSON, `ts_РасшифровкаПлатежа` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ТоварныеКатегории` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `owner` CHAR, `parent` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Марки` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Производитель` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ЗоныДоставки` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_property_values_hierarchy` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Вес` FLOAT, `owner` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ДоговорыКредитовИДепозитов` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `БанковскийСчет` CHAR, `БанковскийСчетКомиссии` CHAR, `БанковскийСчетКонтрагента` CHAR, `БанковскийСчетПроцентов` CHAR, `ВалютаВзаиморасчетов` CHAR, `date` Date, `ДатаПервогоТранша` Date, `ДатаПоследнегоПлатежа` Date, `Касса` CHAR, `Комментарий` CHAR, `Контрагент` CHAR, `НаименованиеДляПечати` CHAR, `number_doc` CHAR, `Организация` CHAR, `Ответственный` CHAR, `Партнер` CHAR, `Подразделение` CHAR, `ПорядокОплаты` CHAR, `Согласован` BOOLEAN, `СрокДней` INT, `СрокМес` INT, `Статус` CHAR, `СтатьяДДСКомиссии` CHAR, `СтатьяДДСОсновногоДолга` CHAR, `СтатьяДДСПоступленияВыдачи` CHAR, `СтатьяДДСПроцентов` CHAR, `СтатьяДоходовРасходовКомиссии` CHAR, `СтатьяДоходовРасходовКомиссии_T` CHAR, `СтатьяДоходовРасходовПроцентов` CHAR, `СтатьяДоходовРасходовПроценто_T` CHAR, `СуммаКомиссии` FLOAT, `СуммаЛимита` FLOAT, `СуммаПроцентов` FLOAT, `СуммаТраншей` FLOAT, `ТипДоговора` CHAR, `ТипКомиссии` CHAR, `ТипСрочности` CHAR, `ФормаОплаты` CHAR, `ХарактерДоговора` CHAR, `ГруппаФинансовогоУчетаДенежныхСредств` CHAR, `ГруппаФинансовогоУчета` CHAR, `НаправлениеДеятельности` CHAR, `ts_Обеспечение` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ШаблоныЭтикетокИЦенников` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Шаблон` CHAR, `Назначение` CHAR, `Ширина` INT, `Высота` INT, `РазмерЯчейки` INT, `ДляЧего` CHAR, `ДляЧего_T` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ЦеновыеГруппы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ХарактеристикиНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НаименованиеПолное` CHAR, `Принципал` CHAR, `Принципал_T` CHAR, `Контрагент` CHAR, `Контрагент_T` CHAR, `owner` CHAR, `owner_T` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ФизическиеЛица` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ДатаРождения` Date, `Пол` CHAR, `ИНН` CHAR, `ГруппаДоступа` CHAR, `Уточнение` CHAR, `parent` CHAR, `ts_КонтактнаяИнформация` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Файлы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Автор` CHAR, `Автор_T` CHAR, `ВладелецФайла` CHAR, `ВладелецФайла_T` CHAR, `ДатаЗаема` Date, `ДатаСоздания` Date, `Зашифрован` BOOLEAN, `ИндексКартинки` INT, `Описание` CHAR, `ПодписанЭП` BOOLEAN, `ПолноеНаименование` CHAR, `Редактирует` CHAR, `Редактирует_T` CHAR, `ТекстХранилище` CHAR, `ТекущаяВерсия` CHAR, `ТекущаяВерсияАвтор` CHAR, `ТекущаяВерсияДатаМодификацииФайла` Date, `ТекущаяВерсияДатаСоздания` Date, `ТекущаяВерсияКод` CHAR, `ТекущаяВерсияНомерВерсии` INT, `ТекущаяВерсияПутьКФайлу` CHAR, `ТекущаяВерсияРазмер` INT, `ТекущаяВерсияРасширение` CHAR, `ТекущаяВерсияТом` CHAR, `ХранитьВерсии` BOOLEAN, `ts_extra_fields` JSON, `ts_СертификатыШифрования` JSON);\nCREATE TABLE IF NOT EXISTS `cat_УчетныеЗаписиЭлектроннойПочты` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `SMTPАутентификация` CHAR, `АдресЭлектроннойПочты` CHAR, `ВремяОжидания` INT, `ИмяПользователя` CHAR, `ИспользоватьБезопасныйВходНаСерверВходящейПочты` BOOLEAN, `ИспользоватьБезопасныйВходНаСерверИсходящейПочты` BOOLEAN, `ИспользоватьДляОтправки` BOOLEAN, `ИспользоватьДляПолучения` BOOLEAN, `ИспользоватьЗащищенноеСоединениеДляВходящейПочты` BOOLEAN, `ИспользоватьЗащищенноеСоединениеДляИсходящейПочты` BOOLEAN, `ОставлятьКопииСообщенийНаСервере` BOOLEAN, `ПериодХраненияСообщенийНаСервере` INT, `Пользователь` CHAR, `ПользовательSMTP` CHAR, `ПортСервераВходящейПочты` INT, `ПортСервераИсходящейПочты` INT, `ПротоколВходящейПочты` CHAR, `СерверВходящейПочты` CHAR, `СерверИсходящейПочты` CHAR, `СпособPOP3Аутентификации` CHAR, `СпособSMTPАутентификации` CHAR, `ТребуетсяВходНаСерверПередОтправкой` BOOLEAN);\nCREATE TABLE IF NOT EXISTS `cat_УсловияПредоставленияСкидокНаценок` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `УсловиеПредоставления` CHAR, `УсловиеПредоставления_T` CHAR, `ВариантОпределенияПериодаНакопительнойСкидки` CHAR, `ВариантНакопления` CHAR, `КритерийОграниченияПримененияЗаОбъемПродаж` CHAR, `ВалютаОграничения` CHAR, `ГрафикОплаты` CHAR, `ФормаОплаты` CHAR, `ЗначениеУсловияОграничения` FLOAT, `СегментНоменклатурыОграничения` CHAR, `ПериодНакопления` CHAR, `ТипСравнения` CHAR, `ГруппаПользователей` CHAR, `ВидКартыЛояльности` CHAR, `СегментПартнеров` CHAR, `КоличествоПериодовНакопления` INT, `ВариантОтбораНоменклатуры` CHAR, `КоличествоДнейДоДняРождения` INT, `КоличествоДнейПослеДняРождения` INT, `ВключатьТекущуюПродажуВНакопленныйОбъемПродаж` BOOLEAN, `УчитыватьХарактеристики` BOOLEAN, `ПараметрыВнешнейОбработки` CHAR, `ХранилищеНастроекКомпоновкиДанных` CHAR, `parent` CHAR, `ts_ВремяДействия` JSON);\nCREATE TABLE IF NOT EXISTS `cat_УпаковкиЕдиницыИзмерения` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Безразмерная` BOOLEAN, `Вес` FLOAT, `ВесЕдиницаИзмерения` CHAR, `Высота` FLOAT, `ВысотаЕдиницаИзмерения` CHAR, `Глубина` FLOAT, `ГлубинаЕдиницаИзмерения` CHAR, `ЕдиницаИзмерения` CHAR, `Числитель` FLOAT, `Знаменатель` FLOAT, `ЛинейныеРазмерыПредставление` CHAR, `Объем` FLOAT, `ОбъемЕдиницаИзмерения` CHAR, `СкладскаяГруппа` CHAR, `Типоразмер` CHAR, `Ширина` FLOAT, `ШиринаЕдиницаИзмерения` CHAR, `КоличествоУпаковок` INT, `ПоставляетсяВМногооборотнойТаре` BOOLEAN, `НоменклатураМногооборотнаяТара` CHAR, `ХарактеристикаМногооборотнаяТара` CHAR, `МинимальноеКоличествоУпаковокМногооборотнойТары` INT, `ТипИзмеряемойВеличины` CHAR, `НаименованиеПолное` CHAR, `МеждународноеСокращение` CHAR, `ТипУпаковки` CHAR, `owner` CHAR, `owner_T` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ТранспортныеСредства` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ВидПеревозки` CHAR, `ГосударственныйНомерПрицепа` CHAR, `ЛицензионнаяКарточкаВид` CHAR, `ЛицензионнаяКарточкаНомер` CHAR, `ЛицензионнаяКарточкаРегистрационныйНомер` CHAR, `ЛицензионнаяКарточкаСерия` CHAR, `Марка` CHAR, `Прицеп` CHAR, `type` CHAR, `ГрузоподъемностьВТоннах` FLOAT, `ВместимостьВКубическихМетрах` FLOAT, `ВместимостьПредставление` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СтруктураПредприятия` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_СтраныМира` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НаименованиеПолное` CHAR, `КодАльфа2` CHAR, `КодАльфа3` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СтатьиДвиженияДенежныхСредств` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `КорреспондирующийСчет` CHAR, `Описание` CHAR, `ВидДвиженияДенежныхСредств` CHAR, `РеквизитДопУпорядочивания` INT, `parent` CHAR, `ts_ХозяйственныеОперации` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_СоглашенияСКлиентами` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `number_doc` CHAR, `date` Date, `СегментПартнеров` CHAR, `Контрагент` CHAR, `Партнер` CHAR, `Организация` CHAR, `Валюта` CHAR, `ГрафикОплаты` CHAR, `СуммаДокумента` FLOAT, `Типовое` BOOLEAN, `СрокПоставки` INT, `ВидЦен` CHAR, `ЦенаВключаетНДС` BOOLEAN, `ИспользуетсяВРаботеТорговыхПредставителей` BOOLEAN, `Соглашение` CHAR, `Склад` CHAR, `СегментНоменклатуры` CHAR, `ДатаНачалаДействия` Date, `ДатаОкончанияДействия` Date, `Комментарий` CHAR, `Регулярное` BOOLEAN, `Период` CHAR, `КоличествоПериодов` INT, `Статус` CHAR, `Согласован` BOOLEAN, `Менеджер` CHAR, `НалогообложениеНДС` CHAR, `ХозяйственнаяОперация` CHAR, `СпособРасчетаВознаграждения` CHAR, `ПроцентВознаграждения` FLOAT, `УдержатьВознаграждение` BOOLEAN, `ПроцентРучнойСкидки` FLOAT, `ПроцентРучнойНаценки` FLOAT, `ДоступноВнешнимПользователям` BOOLEAN, `ПорядокОплаты` CHAR, `ГруппаФинансовогоУчета` CHAR, `ИспользуютсяДоговорыКонтрагентов` BOOLEAN, `ОграничиватьРучныеСкидки` BOOLEAN, `ФормаОплаты` CHAR, `КонтактноеЛицо` CHAR, `ПорядокРасчетов` CHAR, `ВозвращатьМногооборотнуюТару` BOOLEAN, `СрокВозвратаМногооборотнойТары` INT, `РассчитыватьДатуВозвратаТарыПоКалендарю` BOOLEAN, `calendar` CHAR, `ВариантРасчетаЦен` CHAR, `СценарийПланирования` CHAR, `ВидПлана` CHAR, `ТребуетсяЗалогЗаТару` BOOLEAN, `КалендарьВозвратаТары` CHAR, `ВидСоглашенияДляОграниченияЧтения` CHAR, `ВидСоглашенияДляОграниченияИзменения` CHAR, `СтатьяДвиженияДенежныхСредств` CHAR, `ВозможнаРеализацияБезПереходаПраваСобственности` BOOLEAN, `ОбеспечиватьЗаказыОбособленно` BOOLEAN, `КодНаименованияСделки` CHAR, `СпособОпределенияЦеныСделки` CHAR, `КодУсловийПоставки` CHAR, `НаправлениеДеятельности` CHAR, `ts_Товары` JSON, `ts_ЦеновыеГруппы` JSON, `ts_extra_fields` JSON, `ts_ЭтапыГрафикаОплаты` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Склады` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Подразделение` CHAR, `ТипСклада` CHAR, `parent` CHAR, `ts_КонтактнаяИнформация` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_СкладскиеЯчейки` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Линия` CHAR, `ОбластьХранения` CHAR, `Позиция` CHAR, `ПорядокОбхода` INT, `РабочийУчасток` CHAR, `Секция` CHAR, `Помещение` CHAR, `Стеллаж` CHAR, `Типоразмер` CHAR, `ТипСкладскойЯчейки` CHAR, `УровеньДоступности` INT, `Ярус` CHAR, `МаксимальныйКоэффициентНаполненностиПоВесу` INT, `МаксимальныйКоэффициентНаполненностиПоОбъему` INT, `ИспользованиеПериодичностиИнвентаризацииЯчейки` CHAR, `КоличествоДнейМеждуИнвентаризациями` INT, `owner` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СкладскиеПомещения` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ИспользоватьАдресноеХранение` BOOLEAN, `ИспользоватьАдресноеХранениеСправочно` BOOLEAN, `НастройкаАдресногоХранения` CHAR, `ТекущийОтветственный` CHAR, `ТекущаяДолжностьОтветственного` CHAR, `ИспользованиеРабочихУчастков` CHAR, `ДатаНачалаАдресногоХраненияОстатков` Date, `owner` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СкладскиеГруппыУпаковок` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СкладскиеГруппыНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR, `ТипНоменклатуры` CHAR, `ФизическиРазличаетсяОтНазначения` BOOLEAN, `ОграничиватьПоВесу` BOOLEAN, `ОграничиватьПоОбъему` BOOLEAN);\nCREATE TABLE IF NOT EXISTS `cat_СкидкиНаценки` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ВалютаПредоставления` CHAR, `ВариантСовместногоПрименения` CHAR, `ВидЦены` CHAR, `ЗначениеСкидкиНаценки` FLOAT, `РеквизитДопУпорядочивания` INT, `СпособПредоставления` CHAR, `СпособПредоставления_T` CHAR, `Управляемая` BOOLEAN, `ТекстСообщения` CHAR, `ВидКартыЛояльности` CHAR, `СегментПодарков` CHAR, `ИспользоватьКратность` BOOLEAN, `УсловиеДляСкидкиКоличеством` FLOAT, `ТочностьОкругления` FLOAT, `ПсихологическоеОкругление` FLOAT, `ОкруглятьВБольшуюСторону` BOOLEAN, `СпособПримененияСкидки` CHAR, `БонуснаяПрограммаЛояльности` CHAR, `ПериодДействия` CHAR, `КоличествоПериодовДействия` INT, `ПериодОтсрочкиНачалаДействия` CHAR, `КоличествоПериодовОтсрочкиНачалаДействия` INT, `ВариантРасчетаРезультатаСовместногоПрименения` CHAR, `ВариантОтбораНоменклатуры` CHAR, `СегментНоменклатурыОграничения` CHAR, `ПараметрыВнешнейОбработки` CHAR, `ВариантОкругления` CHAR, `ХранилищеНастроекКомпоновкиДанных` CHAR, `УстановленДополнительныйОтбор` BOOLEAN, `ПрименятьУмножениеВРамкахВышестоящейГруппы` BOOLEAN, `УчитыватьХарактеристики` BOOLEAN, `parent` CHAR, `ts_УсловияПредоставления` JSON, `ts_ЦеновыеГруппы` JSON);\nCREATE TABLE IF NOT EXISTS `cat_СерииНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ГоденДо` Date, `ВидНоменклатуры` CHAR, `number_doc` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_СегментыПартнеров` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СегментыНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СделкиСКлиентами` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ВалютаПервичногоСпроса` CHAR, `ВероятностьУспешногоЗавершения` INT, `ВидСделки` CHAR, `ДатаНачала` Date, `ДатаОкончания` Date, `Закрыта` BOOLEAN, `Комментарий` CHAR, `Ответственный` CHAR, `Партнер` CHAR, `ПереведенаНаУправлениеВРучную` BOOLEAN, `ПотенциальнаяСуммаПродажи` FLOAT, `ПричинаПроигрышаСделки` CHAR, `Статус` CHAR, `СоглашениеСКлиентом` CHAR, `ОбособленныйУчетТоваровПоСделке` BOOLEAN, `ts_extra_fields` JSON, `ts_ПартнерыИКонтактныеЛица` JSON, `ts_ПервичныйСпрос` JSON, `ts_НаборыЗначенийДоступа` JSON);\nCREATE TABLE IF NOT EXISTS `cat_РолиКонтактныхЛицПартнеров` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_Производители` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_Проекты` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Ответственный` CHAR, `ПлановаяДатаНачала` Date, `ДатаНачала` Date, `ПлановаяДатаОкончания` Date, `ДатаОкончания` Date, `finished` BOOLEAN, `Комментарий` CHAR, `ts_ПартнерыИКонтактныеЛица` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Пользователи` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Недействителен` BOOLEAN, `Подразделение` CHAR, `ФизическоеЛицо` CHAR, `Комментарий` CHAR, `ancillary` BOOLEAN, `Подготовлен` BOOLEAN, `ИдентификаторПользователяСервиса` CHAR, `СвойстваПользователяИБ` CHAR, `ts_extra_fields` JSON, `ts_КонтактнаяИнформация` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ПартнерыПрисоединенныеФайлы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Автор` CHAR, `ВладелецФайла` CHAR, `ДатаМодификацииУниверсальная` Date, `ДатаСоздания` Date, `Зашифрован` BOOLEAN, `Изменил` CHAR, `ИндексКартинки` INT, `Описание` CHAR, `ПодписанЭП` BOOLEAN, `ПутьКФайлу` CHAR, `Размер` INT, `Расширение` CHAR, `Редактирует` CHAR, `СтатусИзвлеченияТекста` CHAR, `ТекстХранилище` CHAR, `ТипХраненияФайла` CHAR, `Том` CHAR, `ФайлХранилище` CHAR, `ts_ЭлектронныеПодписи` JSON, `ts_СертификатыШифрования` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Партнеры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `БизнесРегион` CHAR, `ГруппаДоступа` CHAR, `ДатаРегистрации` Date, `Клиент` BOOLEAN, `Комментарий` CHAR, `Поставщик` BOOLEAN, `НаименованиеПолное` CHAR, `ОсновнойМенеджер` CHAR, `Конкурент` BOOLEAN, `ПрочиеОтношения` BOOLEAN, `ОбслуживаетсяТорговымиПредставителями` BOOLEAN, `ДополнительнаяИнформация` CHAR, `Перевозчик` BOOLEAN, `ШаблонЭтикетки` CHAR, `ЮрФизЛицо` CHAR, `Пол` CHAR, `ДатаРождения` Date, `parent` CHAR, `ts_extra_fields` JSON, `ts_КонтактнаяИнформация` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Организации` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ВидОбменаСКонтролирующимиОрганами` CHAR, `Военкомат` CHAR, `ГоловнаяОрганизация` CHAR, `ИНН` CHAR, `ДатаРегистрации` Date, `ДополнительныйКодФСС` CHAR, `ЕстьОбособленныеПодразделения` BOOLEAN, `ИндивидуальныйПредприниматель` CHAR, `КодНалоговогоОргана` CHAR, `ИностраннаяОрганизация` BOOLEAN, `ИПКодПодчиненностиФСС` CHAR, `ИПРегистрационныйНомерПФР` CHAR, `ИПРегистрационныйНомерТФОМС` CHAR, `ИПРегистрационныйНомерФСС` CHAR, `КодВСтранеРегистрации` CHAR, `КодНалоговогоОрганаПолучателя` CHAR, `КодОрганаПФР` CHAR, `КодОрганаФСГС` CHAR, `КодОКОНХ` CHAR, `КодПоОКАТО` CHAR, `КодПоОКПО` CHAR, `КодПодчиненностиФСС` CHAR, `КрупнейшийНалогоплательщик` BOOLEAN, `НаименованиеПолное` CHAR, `НаименованиеСокращенное` CHAR, `НаименованиеТерриториальногоОрганаПФР` CHAR, `НаименованиеТерриториальногоОрганаФСС` CHAR, `НаименованиеИнострОрганизации` CHAR, `НаименованиеНалоговогоОргана` CHAR, `ОбменКаталогОтправкиДанныхОтчетности` CHAR, `ОбменКаталогПрограммыЭлектроннойПочты` CHAR, `ОбменКодАбонента` CHAR, `ОбособленноеПодразделение` BOOLEAN, `ОГРН` CHAR, `КПП` CHAR, `ПрименятьРайонныйКоэффициент` BOOLEAN, `ПрименятьСевернуюНадбавку` BOOLEAN, `РайонныйКоэффициент` FLOAT, `prefix` CHAR, `РегистрационныйНомерФСС` CHAR, `РегистрационныйНомерПФР` CHAR, `СвидетельствоДатаВыдачи` Date, `УчетнаяЗаписьОбмена` CHAR, `КодОКВЭД` CHAR, `НаименованиеОКВЭД` CHAR, `КодОКОПФ` CHAR, `РегистрационныйНомерТФОМС` CHAR, `НаименованиеОКОПФ` CHAR, `КодОКФС` CHAR, `РайонныйКоэффициентРФ` FLOAT, `СвидетельствоСерияНомер` CHAR, `СтранаПостоянногоМестонахождения` CHAR, `СтранаРегистрации` CHAR, `ГрафикРаботыСотрудников` CHAR, `НаименованиеОКФС` CHAR, `ЦифровойИндексОбособленногоПодразделения` INT, `ПроцентСевернойНадбавки` FLOAT, `ЮрФизЛицо` CHAR, `ЮридическоеФизическоеЛицо` CHAR, `ДопускаютсяВзаиморасчетыЧерезГоловнуюОрганизацию` BOOLEAN, `ЗарегистрированВОЭЗ` BOOLEAN, `ts_КонтактнаяИнформация` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ОбластиХранения` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR, `Помещение` CHAR, `ПриоритетРазмещенияВСвободныеЯчейки` INT, `ПриоритетРазмещенияВМонотоварныеЯчейки` INT, `ПриоритетРазмещенияВСмешанныеЯчейки` INT, `ПриоритетРазмещенияВЯчейкиСДругимТоваром` INT, `ПриоритетОтбораИзМонотоварныхЯчеек` INT, `ПриоритетОтбораИзСмешанныхЯчеек` INT, `ПриоритетОтбораПодОстаток` INT, `ОписаниеМонотоварности` CHAR, `СтрогаяМонотоварность` BOOLEAN, `ИспользованиеПериодичностиИнвентаризацииЯчеек` CHAR, `КоличествоДнейМеждуИнвентаризациями` INT, `ОбластьОбособленногоХранения` BOOLEAN, `owner` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_НоменклатураПрисоединенныеФайлы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Автор` CHAR, `ВладелецФайла` CHAR, `ДатаМодификацииУниверсальная` Date, `ДатаСоздания` Date, `Зашифрован` BOOLEAN, `Изменил` CHAR, `ИндексКартинки` INT, `Описание` CHAR, `ПодписанЭП` BOOLEAN, `ПутьКФайлу` CHAR, `Размер` INT, `Расширение` CHAR, `Редактирует` CHAR, `СтатусИзвлеченияТекста` CHAR, `ТекстХранилище` CHAR, `ТипХраненияФайла` CHAR, `Том` CHAR, `ФайлХранилище` CHAR, `ts_ЭлектронныеПодписи` JSON, `ts_СертификатыШифрования` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Номенклатура` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Артикул` CHAR, `ВариантОформленияПродажи` CHAR, `ВесЕдиницаИзмерения` CHAR, `ВесЗнаменатель` FLOAT, `ВесИспользовать` BOOLEAN, `ВесМожноУказыватьВДокументах` BOOLEAN, `ВесЧислитель` FLOAT, `ВидНоменклатуры` CHAR, `ЕдиницаИзмерения` CHAR, `ЕдиницаИзмеренияСрокаГодности` CHAR, `ЕстьТоварыДругогоКачества` BOOLEAN, `ДлинаЕдиницаИзмерения` CHAR, `ДлинаЗнаменатель` FLOAT, `ДлинаИспользовать` BOOLEAN, `ДлинаМожноУказыватьВДокументах` BOOLEAN, `ДлинаЧислитель` FLOAT, `ИспользованиеХарактеристик` CHAR, `Качество` CHAR, `КодДляПоиска` CHAR, `Марка` CHAR, `НаборУпаковок` CHAR, `НаименованиеПолное` CHAR, `НоменклатураМногооборотнаяТара` CHAR, `Описание` CHAR, `Производитель` CHAR, `СкладскаяГруппа` CHAR, `СрокГодности` INT, `СтавкаНДС` CHAR, `ТипНоменклатуры` CHAR, `ТоварнаяКатегория` CHAR, `ФайлКартинки` CHAR, `ФайлОписанияДляСайта` CHAR, `ОбъемЕдиницаИзмерения` CHAR, `ОбъемЗнаменатель` FLOAT, `ОбъемИспользовать` BOOLEAN, `ОбъемМожноУказыватьВДокументах` BOOLEAN, `ОбъемЧислитель` FLOAT, `ПлощадьЕдиницаИзмерения` CHAR, `ПлощадьЗнаменатель` FLOAT, `ПлощадьИспользовать` BOOLEAN, `ПлощадьМожноУказыватьВДокументах` BOOLEAN, `ПлощадьЧислитель` FLOAT, `ЦеноваяГруппа` CHAR, `ШаблонЦенника` CHAR, `ЕдиницаДляОтчетов` CHAR, `КоэффициентЕдиницыДляОтчетов` FLOAT, `ШаблонЭтикетки` CHAR, `СезоннаяГруппа` CHAR, `КоллекцияНоменклатуры` CHAR, `Принципал` CHAR, `Принципал_T` CHAR, `Контрагент` CHAR, `Контрагент_T` CHAR, `РейтингПродаж` CHAR, `ОбособленнаяЗакупкаПродажа` BOOLEAN, `КодТНВЭД` CHAR, `КодОКВЭД` CHAR, `КодОКП` CHAR, `ОблагаетсяНДПИПоПроцентнойСтавке` BOOLEAN, `ВладелецСерий` CHAR, `ВладелецХарактеристик` CHAR, `ВладелецТоварныхКатегорий` CHAR, `Крепость` FLOAT, `Цена_Мин` FLOAT, `Цена_Макс` FLOAT, `Файлы` CHAR, `МаркетИд` CHAR, `Характеристики` CHAR, `parent` CHAR, `Цена` FLOAT, `ts_extra_fields` JSON, `ts_ДрагоценныеМатериалы` JSON);\nCREATE TABLE IF NOT EXISTS `cat_НаправленияДеятельности` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Статус` CHAR, `УчетДоходов` BOOLEAN, `УчетЗатрат` BOOLEAN, `УчетДенежныхСредствРаздельно` BOOLEAN, `УчетДенежныхСредствПоКорреспонденции` BOOLEAN, `УчетВнеоборотныхАктивов` BOOLEAN, `Назначение` CHAR, `ВариантОбособления` CHAR, `Комментарий` CHAR, `parent` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_НаборыУпаковок` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ЕдиницаИзмерения` CHAR, `ЕдиницаДляОтчетов` CHAR, `КоэффициентЕдиницыДляОтчетов` FLOAT);\nCREATE TABLE IF NOT EXISTS `cat_НаборыДополнительныхРеквизитовИСведений` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `КоличествоРеквизитов` CHAR, `КоличествоСведений` CHAR, `Используется` BOOLEAN, `parent` CHAR, `ts_extra_fields` JSON, `ts_extra_properties` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Контрагенты` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ИНН` CHAR, `ОбособленноеПодразделение` BOOLEAN, `ЮридическоеФизическоеЛицо` CHAR, `ГоловнойКонтрагент` CHAR, `КодПоОКПО` CHAR, `КПП` CHAR, `НаименованиеПолное` CHAR, `ДополнительнаяИнформация` CHAR, `Партнер` CHAR, `ЮрФизЛицо` CHAR, `НДСпоСтавкам4и2` BOOLEAN, `СтранаРегистрации` CHAR, `РегистрационныйНомер` CHAR, `ts_КонтактнаяИнформация` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_КонтактныеЛицаПартнеров` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ДатаРегистрацииСвязи` Date, `ДатаПрекращенияСвязи` Date, `Автор` CHAR, `Автор_T` CHAR, `Комментарий` CHAR, `ДополнительнаяИнформация` CHAR, `ДолжностьПоВизитке` CHAR, `Пол` CHAR, `ДатаРождения` Date, `owner` CHAR, `ts_КонтактнаяИнформация` JSON, `ts_РолиКонтактногоЛица` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_КлассификаторБанковРФ` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `КоррСчет` CHAR, `Город` CHAR, `Адрес` CHAR, `Телефоны` CHAR, `ДеятельностьПрекращена` BOOLEAN, `СВИФТБИК` CHAR, `ИНН` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_Кассы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `КассоваяКнига` CHAR, `ВалютаДенежныхСредств` CHAR, `Подразделение` CHAR, `РазрешитьПлатежиБезУказанияЗаявок` BOOLEAN, `СрокИнкассации` INT, `ГруппаФинансовогоУчета` CHAR, `ЭтоКассаОбособленногоПодразделения` BOOLEAN, `СчетУчета` CHAR, `НаправлениеДеятельности` CHAR, `owner` CHAR, `ts_ПолучателиПлатежейПриПеремещенииДС` JSON, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_КартыЛояльности` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Штрихкод` CHAR, `МагнитныйКод` CHAR, `Статус` CHAR, `Партнер` CHAR, `Контрагент` CHAR, `Соглашение` CHAR, `owner` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ИдентификаторыОбъектовМетаданных` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ПорядокКоллекции` INT, `Имя` CHAR, `synonym` CHAR, `ПолноеИмя` CHAR, `ПолныйСиноним` CHAR, `БезДанных` BOOLEAN, `ЗначениеПустойСсылки` CHAR, `ЗначениеПустойСсылки_T` CHAR, `КлючОбъектаМетаданных` CHAR, `НоваяСсылка` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Вес` FLOAT, `owner` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ДоговорыКонтрагентов` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Комментарий` CHAR, `Организация` CHAR, `Контрагент` CHAR, `Менеджер` CHAR, `date` Date, `number_doc` CHAR, `Партнер` CHAR, `Подразделение` CHAR, `ПорядокРасчетов` CHAR, `Согласован` BOOLEAN, `Статус` CHAR, `ХозяйственнаяОперация` CHAR, `ТипДоговора` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ГрафикиОплаты` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ФормаОплаты` CHAR, `ТолькоКредитныеЭтапы` BOOLEAN, `calendar` CHAR, `ts_Этапы` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ВнешниеПользователи` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ОбъектАвторизации` CHAR, `ОбъектАвторизации_T` CHAR, `Комментарий` CHAR, `ИдентификаторПользователяИБ` CHAR, `ИдентификаторПользователяСервиса` CHAR, `ПользовательИБИмя` CHAR, `ПользовательИБПароль` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ВидыЦен` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ВалютаЦены` CHAR, `ЦенаВключаетНДС` BOOLEAN, `ИспользоватьПриПродаже` BOOLEAN, `ИспользоватьПриПередачеМеждуОрганизациями` BOOLEAN, `ИспользоватьПриВыпускеПродукции` BOOLEAN, `СпособЗаданияЦены` CHAR, `Формула` CHAR, `ОкруглятьВБольшуюСторону` BOOLEAN, `РеквизитДопУпорядочивания` INT, `identifier` CHAR, `ПорогСрабатывания` FLOAT, `СхемаКомпоновкиДанных` CHAR, `ХранилищеСхемыКомпоновкиДанных` CHAR, `ХранилищеНастроекКомпоновкиДанных` CHAR, `БазовыйВидЦены` CHAR, `Наценка` FLOAT, `ТочностьОкругления` FLOAT, `Округлять` BOOLEAN, `УстанавливатьЦенуПриВводеНаОсновании` BOOLEAN, `ИспользоватьПриПередачеПродукцииДавальцу` BOOLEAN, `ВариантОкругления` CHAR, `ts_ВлияющиеВидыЦен` JSON, `ts_ЦеновыеГруппы` JSON, `ts_ПравилаОкругленияЦены` JSON, `ts_ПорогиСрабатывания` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ВидыСделокСКлиентами` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Описание` CHAR, `Ответственный` CHAR, `ТипСделки` CHAR, `ИспользованиеРазрешено` BOOLEAN, `ИспользоватьСпрос` BOOLEAN, `ОбособленныйУчетТоваровПоСделке` BOOLEAN, `ts_ЭтапыСделкиПоПродаже` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ВидыСвязейМеждуФизЛицами` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Комментарий` CHAR, `РольФизЛица1` CHAR, `РольФизЛица2` CHAR, `ОбратноеНаименование` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ВидыСвязейМеждуПартнерами` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Комментарий` CHAR, `РольПартнера1` CHAR, `РольПартнера2` CHAR, `ОбратноеНаименование` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ВидыНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НаборСвойств` CHAR, `ТипНоменклатуры` CHAR, `Цена_Мин` FLOAT, `Цена_Макс` FLOAT, `Производители` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ВидыКонтактнойИнформации` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `АдресТолькоРоссийский` BOOLEAN, `ВключатьСтрануВПредставление` BOOLEAN, `ЗапретитьРедактированиеПользователем` BOOLEAN, `Используется` BOOLEAN, `МожноИзменятьСпособРедактирования` BOOLEAN, `ОбязательноеЗаполнение` BOOLEAN, `tooltip` CHAR, `ПроверятьКорректность` BOOLEAN, `ПроверятьПоФИАС` BOOLEAN, `РазрешитьВводНесколькихЗначений` BOOLEAN, `РедактированиеТолькоВДиалоге` BOOLEAN, `РеквизитДопУпорядочивания` INT, `СкрыватьНеактуальныеАдреса` BOOLEAN, `ТелефонCДобавочнымНомером` BOOLEAN, `type` CHAR, `УказыватьОКТМО` BOOLEAN, `МногострочноеПоле` BOOLEAN, `ХранитьИсториюИзменений` BOOLEAN, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ВидыКартЛояльности` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Статус` CHAR, `ДатаНачалаДействия` Date, `ДатаОкончанияДействия` Date, `Комментарий` CHAR, `Персонализирована` BOOLEAN, `АвтоматическаяРегистрацияПриПервомСчитывании` BOOLEAN, `ТипКарты` CHAR, `Организация` CHAR, `БонуснаяПрограммаЛояльности` CHAR, `ts_extra_fields` JSON, `ts_ШаблоныКодовКартЛояльности` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ВидыЗапасов` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Организация` CHAR, `ТипЗапасов` CHAR, `НалогообложениеНДС` CHAR, `Комитент` CHAR, `Комитент_T` CHAR, `Соглашение` CHAR, `Валюта` CHAR, `РеализацияЗапасовДругойОрганизации` BOOLEAN, `ВидЗапасовВладельца` CHAR, `СпособПередачиТоваров` CHAR, `Поставщик` CHAR, `Поставщик_T` CHAR, `Предназначение` CHAR, `Подразделение` CHAR, `Менеджер` CHAR, `Сделка` CHAR, `ГруппаФинансовогоУчета` CHAR, `Контрагент` CHAR, `Контрагент_T` CHAR, `Договор` CHAR, `Назначение` CHAR, `ГруппаПродукции` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ВидыДокументовФизическихЛиц` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `КодМВД` CHAR, `КодПФР` CHAR, `РеквизитДопУпорядочивания` INT);\nCREATE TABLE IF NOT EXISTS `cat_ВариантыКомплектацииНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Характеристика` CHAR, `Основной` BOOLEAN, `НоменклатураОсновногоКомпонента` CHAR, `ХарактеристикаОсновногоКомпонента` CHAR, `Упаковка` CHAR, `КоличествоУпаковок` FLOAT, `Количество` FLOAT, `ДлительностьСборкиРазборки` INT, `ВариантРасчетаЦеныНабора` CHAR, `ВариантПредставленияНабораВПечатныхФормах` CHAR, `СодержитТовары` BOOLEAN, `СодержитУслуги` BOOLEAN, `owner` CHAR, `ts_Товары` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ВариантыКлассификацииЗадолженности` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `calendar` CHAR, `ts_Интервалы` JSON);\nCREATE TABLE IF NOT EXISTS `cat_Валюты` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ЗагружаетсяИзИнтернета` BOOLEAN, `НаименованиеПолное` CHAR, `Наценка` FLOAT, `ОсновнаяВалюта` CHAR, `ПараметрыПрописиНаРусском` CHAR, `ФормулаРасчетаКурса` CHAR, `СпособУстановкиКурса` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_БизнесРегионы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_БанковскиеСчетаОрганизаций` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ВалютаДенежныхСредств` CHAR, `НомерСчета` CHAR, `Банк` CHAR, `БанкДляРасчетов` CHAR, `ТекстКорреспондента` CHAR, `ТекстНазначения` CHAR, `ВариантВыводаМесяца` CHAR, `ВыводитьСуммуБезКопеек` BOOLEAN, `СрокИсполненияПлатежа` INT, `ИспользоватьОбменСБанком` BOOLEAN, `Программа` CHAR, `Кодировка` CHAR, `ФайлЗагрузки` CHAR, `ФайлВыгрузки` CHAR, `РазрешитьПлатежиБезУказанияЗаявок` BOOLEAN, `Подразделение` CHAR, `БИКБанка` CHAR, `РучноеИзменениеРеквизитовБанка` BOOLEAN, `НаименованиеБанка` CHAR, `КоррСчетБанка` CHAR, `ГородБанка` CHAR, `АдресБанка` CHAR, `ТелефоныБанка` CHAR, `БИКБанкаДляРасчетов` CHAR, `РучноеИзменениеРеквизитовБанкаДляРасчетов` BOOLEAN, `НаименованиеБанкаДляРасчетов` CHAR, `КоррСчетБанкаДляРасчетов` CHAR, `ГородБанкаДляРасчетов` CHAR, `АдресБанкаДляРасчетов` CHAR, `ТелефоныБанкаДляРасчетов` CHAR, `ГруппаФинансовогоУчета` CHAR, `ИспользоватьПрямойОбменСБанком` BOOLEAN, `ОбменСБанкомВключен` BOOLEAN, `СчетУчета` CHAR, `СВИФТБанка` CHAR, `СВИФТБанкаДляРасчетов` CHAR, `ИностранныйБанк` BOOLEAN, `СчетВБанкеДляРасчетов` CHAR, `Закрыт` BOOLEAN, `ОтдельныйСчетГОЗ` BOOLEAN, `ГосударственныйКонтракт` CHAR, `НаправлениеДеятельности` CHAR, `owner` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_БанковскиеСчетаКонтрагентов` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НомерСчета` CHAR, `Банк` CHAR, `БанкДляРасчетов` CHAR, `ТекстКорреспондента` CHAR, `ТекстНазначения` CHAR, `ВалютаДенежныхСредств` CHAR, `БИКБанка` CHAR, `РучноеИзменениеРеквизитовБанка` BOOLEAN, `НаименованиеБанка` CHAR, `КоррСчетБанка` CHAR, `ГородБанка` CHAR, `АдресБанка` CHAR, `ТелефоныБанка` CHAR, `БИКБанкаДляРасчетов` CHAR, `РучноеИзменениеРеквизитовБанкаДляРасчетов` BOOLEAN, `НаименованиеБанкаДляРасчетов` CHAR, `КоррСчетБанкаДляРасчетов` CHAR, `ГородБанкаДляРасчетов` CHAR, `АдресБанкаДляРасчетов` CHAR, `ТелефоныБанкаДляРасчетов` CHAR, `СВИФТБанка` CHAR, `СВИФТБанкаДляРасчетов` CHAR, `ИностранныйБанк` BOOLEAN, `СчетВБанкеДляРасчетов` CHAR, `Закрыт` BOOLEAN, `ОтдельныйСчетГОЗ` BOOLEAN, `ГосударственныйКонтракт` CHAR, `owner` CHAR, `owner_T` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_ОбщероссийскийКлассификаторПродукции` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НаименованиеПолное` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_КлассификаторТНВЭД` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НаименованиеПолное` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_КлассификаторВидовЭкономическойДеятельности` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `НаименованиеПолное` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_КоллекцииНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ДатаНачалаПродаж` Date, `ДатаЗапретаПродажи` Date, `ДатаНачалаЗакупок` Date, `ДатаЗапретаЗакупки` Date, `parent` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_РейтингиПродажНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `РеквизитДопУпорядочивания` INT, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cat_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Элемент` CHAR, `Элемент_T` CHAR, `ts_Элементы` JSON);\nCREATE TABLE IF NOT EXISTS `cat_ИдентификаторыОбъектовРасширений` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ПорядокКоллекции` INT, `Имя` CHAR, `synonym` CHAR, `ПолноеИмя` CHAR, `ПолныйСиноним` CHAR, `БезДанных` BOOLEAN, `ЗначениеПустойСсылки` CHAR, `ЗначениеПустойСсылки_T` CHAR, `КлючОбъектаМетаданных` CHAR, `НоваяСсылка` CHAR, `ИмяРасширения` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СертификатыНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `ДатаНачалаСрокаДействия` Date, `ДатаОкончанияСрокаДействия` Date, `Бессрочный` BOOLEAN, `ОрганВыдавшийДокумент` CHAR, `ТипСертификата` CHAR, `number_doc` CHAR, `presentation` CHAR, `Статус` CHAR, `parent` CHAR);\nCREATE TABLE IF NOT EXISTS `cat_СезонныеГруппы` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN);\nCREATE TABLE IF NOT EXISTS `cch_СтатьиРасходов` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR, `type` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cch_СтатьиДоходов` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `parent` CHAR, `type` CHAR, `ts_extra_fields` JSON);\nCREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `deleted` BOOLEAN, lc_changed INT, id CHAR, name CHAR, is_folder BOOLEAN, `Виден` BOOLEAN, `ВладелецДополнительныхЗначений` CHAR, `ДополнительныеЗначенияИспользуются` BOOLEAN, `ДополнительныеЗначенияСВесом` BOOLEAN, `Доступен` BOOLEAN, `Заголовок` CHAR, `ЗаголовокФормыВыбораЗначения` CHAR, `ЗаголовокФормыЗначения` CHAR, `ЗаполнятьОбязательно` BOOLEAN, `Комментарий` CHAR, `МногострочноеПолеВвода` INT, `НаборСвойств` CHAR, `tooltip` CHAR, `ФорматСвойства` CHAR, `ЭтоДополнительноеСведение` BOOLEAN, `type` JSON, `ts_ЗависимостиДополнительныхРеквизитов` JSON);\nCREATE TABLE IF NOT EXISTS `enm_ТипыДоговоров` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_СтатусыДоговоровКонтрагентов` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ПорядокРасчетов` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ПорядокОплатыПоСоглашениям` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ХозяйственныеОперации` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ЮрФизЛицо` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ЮридическоеФизическоеЛицо` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыХраненияФайлов` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыСравненияЗначенийСкидокНаценок` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыОтветственныхЛиц` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыНалогообложенияНДС` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыКонтактнойИнформации` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыКодовКарт` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыКассККМ` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыКарт` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ТипыДенежныхСредств` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_СтатусыКартЛояльности` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_СтавкиНДС` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_СпособыУстановкиКурсаВалюты` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ПолФизическогоЛица` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_registration_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_caching_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ЕдиницыИзмеренияВремени` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ДниНедели` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ГрадацииКачества` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ВидыДнейПроизводственногоКалендаря` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ВариантыОформленияПродажи` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\nCREATE TABLE IF NOT EXISTS `enm_ВариантыИспользованияХарактеристикНоменклатуры` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR);\n"});
/**
 * Главное окно интерфейса
 *
 * Created 25.12.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author Evgeniy Malyarov
 * @module wnd_main
 */

/**
 * Процедура устанавливает параметры работы программы, специфичные для текущей сборки
 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
 * @param modifiers {Array} - сюда можно добавить обработчики, переопределяющие функциональность объектов данных
 */
$p.settings = function (prm, modifiers) {

	// разделитель для localStorage
	prm.local_storage_prefix = "delegate_";

	//prm.rest = true;
	prm.irest_enabled = true;

	// расположение rest-сервиса ut
	prm.rest_path = "/a/ut11/%1/odata/standard.odata/";

	// скин по умолчанию
	prm.skin = "dhx_terrace";

	// сокет временно отключаем
	// prm.ws_url = "ws://builder.oknosoft.local:8001";

	// гостевой пользователь
	// КанинСА
	// автономный режим для демки
	prm.offline = true;
	localStorage.setItem("delegate_offline", "true");

	prm.files_date = 201601220000;

	// по умолчанию, обращаемся к зоне 0
	prm.zone = 0;

	// расположение файлов данных
	prm.data_url = "data/";

	// разрешаем покидать страницу без лишних вопросов
	$p.eve.redirect = true;

};

$p.iface.oninit = function() {

	$p.iface.sidebar_items = [
		{id: "clients", text: "Клиенты", icon: "clients_48.png"},
		{id: "orders", text: "Документы", icon: "projects_48.png"},
		{id: "events", text: "Планирование", icon: "events_48.png"},
		{id: "settings", text: "Настройки", icon: "settings_48.png"},
		{id: "about", text: "О программе", icon: "about_48.png"}
	];

	// гасим заставку
	document.body.removeChild(document.querySelector("#delegate_splash"));

	// создаём основной сайдбар
	$p.iface.main = new dhtmlXSideBar({
		parent: document.body,
		icons_path: "dist/imgs/",
		width: 180,
		header: true,
		template: "tiles",
		autohide: true,
		items: $p.iface.sidebar_items,
		offsets: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	});


	// подписываемся на событие навигации по сайдбару
	$p.iface.main.attachEvent("onSelect", function(id){

		var hprm = $p.job_prm.parse_url();
		if(hprm.view != id)
			$p.iface.set_hash(hprm.obj, hprm.ref, hprm.frm, id);

		$p.iface["view_" + id]($p.iface.main.cells(id));

	});

	// активируем страницу
	hprm = $p.job_prm.parse_url();
	if(!hprm.view || $p.iface.main.getAllItems().indexOf(hprm.view) == -1){
		$p.iface.set_hash(hprm.obj, hprm.ref, hprm.frm, "orders");
	} else
		setTimeout($p.iface.hash_route, 10);

	var dt = Date.now();
	dhx4.attachEvent("meta", function () {
		console.log(Date.now() - dt);
	});

};

/**
 * Обработчик маршрутизации
 * @param hprm
 * @return {boolean}
 */
$p.eve.hash_route.push(function (hprm) {

	// view отвечает за переключение закладки в SideBar
	if(hprm.view && $p.iface.main.getActiveItem() != hprm.view){
		$p.iface.main.getAllItems().forEach(function(item){
			if(item == hprm.view)
				$p.iface.main.cells(item).setActive(true);
		});
	}
	return false;
});
/**
 *
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author  Evgeniy Malyarov
 * @module  view_about
 */

$p.iface.view_about = function (cell) {

	function OViewAbout(){

		cell.attachHTMLString($p.injected_data['view_about.html']);
		cell.cell.querySelector(".dhx_cell_cont_sidebar").style.overflow = "auto";

		this.tb_nav = new $p.iface.OTooolBar({
			wrapper: cell.cell.querySelector(".dhx_cell_sidebar_hdr"),
			class_name: 'md_otbnav',
			width: '200px', height: '28px', top: '3px', right: '3px', name: 'right',
			buttons: [
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', title: 'О&nbsp;программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', title: 'Настройки', float: 'right'},
				{name: 'events', text: '<i class="fa fa-calendar-check-o md-fa-lg"></i>', title: 'Планирование', float: 'right'},
				{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', title: 'Документы', float: 'right'},
				{name: 'clients', text: '<i class="fa fa-user md-fa-lg"></i>', title: 'Клиенты', float: 'right'}

			], onclick: function (name) {
				$p.iface.main.cells(name).setActive(true);
				return false;
			}
		});
	}

	if(!$p.iface._about)
		$p.iface._about = new OViewAbout();

	return $p.iface._about;

};

/**
 *
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author  Evgeniy Malyarov
 * @module  view_clients
 */

$p.iface.view_clients = function (cell) {

	function OViewClients(){

		var t = this;

		function show_list(){

			var _cell = t.carousel.cells("list");

			if(t.carousel.getActiveCell() != _cell)
				_cell.setActive();

			if(!t.list){
				t.carousel.cells("list").detachObject(true);
				t.list = $p.cat.Партнеры.form_list(t.carousel.cells("list"), {
					hide_header: true
				});
				t.list.elmnts.cell_tree.collapse();
			}

		}

		function show_doc(ref){

			var _cell = t.carousel.cells("doc");

			if(t.carousel.getActiveCell() != _cell)
				_cell.setActive();

			if(!_cell.ref || _cell.ref != ref)
				$p.cat.Партнеры.form_obj(_cell, {
						ref: ref,
						bind_pwnd: true,
						on_close: function () {
							setTimeout(function () {
								$p.iface.set_hash(undefined, "", "list");
							});
						}
					})
					.then(function (wnd) {
						t.doc = wnd;
					});
		}


		function hash_route(hprm) {

			if(hprm.view == "clients"){

				if($p.eve.logged_in){

					if(hprm.obj == "cat.Партнеры" && !$p.is_empty_guid(hprm.ref)){

						if(hprm.frm != "doc")
							setTimeout(function () {
								$p.iface.set_hash(undefined, undefined, "doc");
							});
						else
							show_doc(hprm.ref);


					} else{

						if(hprm.obj != "cat.Партнеры")
							setTimeout(function () {
								$p.iface.set_hash("cat.Партнеры", "", "list");
							});
						else
							show_list();
					}
				}

				return false;
			}

		}

		function on_log_in(){

			// имитируем переход
			var hprm = $p.job_prm.parse_url(),
				obj = hprm.obj || "cat.Партнеры";

			if(hprm.view == "clients")
				setTimeout(function () {
					$p.iface.set_hash(obj);
				});
		}

		// Рисуем дополнительные элементы навигации
		t.tb_nav = new $p.iface.OTooolBar({
			wrapper: cell.cell.querySelector(".dhx_cell_sidebar_hdr"),
			class_name: 'md_otbnav',
			width: '220px', height: '28px', top: '3px', right: '3px', name: 'right',
			buttons: [
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', title: 'О&nbsp;программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', title: 'Настройки', float: 'right'},
				{name: 'events', text: '<i class="fa fa-calendar-check-o md-fa-lg"></i>', title: 'Планирование', float: 'right'},
				{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', title: 'Документы', float: 'right'},
				{name: 'clients', text: '<i class="fa fa-user md-fa-lg"></i>', title: 'Клиенты', float: 'right'}

			], onclick: function (name) {
				$p.iface.main.cells(name).setActive(true);
				return false;
			}
		});

		// страницы карусели
		t.carousel = cell.attachCarousel({
			keys:           false,
			touch_scroll:   false,
			offset_left:    0,
			offset_top:     4,
			offset_item:    0
		});
		t.carousel.hideControls();
		t.carousel.addCell("list");
		t.carousel.addCell("doc");

		// Рисуем стандартную форму аутентификации. К ней уже привязан алгоритм входа по умолчанию
		// При необходимости, можно реализовать клиентские сертификаты, двухфакторную авторизацию с одноразовыми sms и т.д.
		if($p.eve.logged_in)
			setTimeout(on_log_in);
		else
			$p.iface.frm_auth({	cell: t.carousel.cells("list") }, null, $p.record_log );


		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.eve.hash_route.push(hash_route);


		// слушаем событие online-offline


		// слушаем событие авторизации и входа в систему
		$p.eve.attachEvent("log_in", on_log_in);

	}

	if(!$p.iface._clients)
		$p.iface._clients = new OViewClients();

	return $p.iface._clients;

};

/**
 *
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author  Evgeniy Malyarov
 * @module  view_events
 */

$p.iface.view_events = function (cell) {

	function OViewEvents(){

		var t = this;

		function create_scheduler(){
			//scheduler.config.xml_date="%Y-%m-%d %H:%i";
			scheduler.config.first_hour = 8;
			scheduler.config.last_hour = 22;

			var sTabs = '<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div>'+
				'<div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div>'+
				'<div class="dhx_cal_tab" name="month_tab" style="right:280px;"></div>'+
				'<div class="dhx_cal_date"></div><div class="dhx_minical_icon">&nbsp;</div>';
				//'<div class="dhx_cal_tab" name="timeline_tab" style="right:76px;"></div>';

			t._scheduler = cell.attachScheduler(null, "week", sTabs);

			t._scheduler.attachEvent("onBeforeViewChange", function(old_mode, old_date, mode, date){
				//if(mode == "timeline"){
				//	$p.msg.show_not_implemented();
				//	return false;
				//}
				return true;
			});
		}

		function hash_route(hprm) {

			if(hprm.view == "events"){

				if($p.eve.logged_in){

					if(hprm.obj == "doc.ЗаказКлиента" && !$p.is_empty_guid(hprm.ref)){

						if(hprm.frm != "doc")
							setTimeout(function () {
								$p.iface.set_hash(undefined, undefined, "doc");
							});
						else
							show_doc(hprm.ref);


					} else if($p.is_empty_guid(hprm.ref) || hprm.frm == "list"){

						if(hprm.obj != "doc.ЗаказКлиента")
							setTimeout(function () {
								$p.iface.set_hash("doc.ЗаказКлиента");
							});
						else
							show_list();
					}
				}

				return false;
			}

		}

		if(!window.dhtmlXScheduler){
			$p.load_script("//oknosoft.github.io/metadata.js/lib/dhtmlxscheduler/dhtmlxscheduler.min.js", "script", create_scheduler);
			$p.load_script("//oknosoft.github.io/metadata.js/lib/dhtmlxscheduler/dhtmlxscheduler.css", "link");
		}else
			create_scheduler();

		t.tb_nav = new $p.iface.OTooolBar({
			wrapper: cell.cell.querySelector(".dhx_cell_sidebar_hdr"),
			class_name: 'md_otbnav',
			width: '200px', height: '28px', top: '3px', right: '3px', name: 'right',
			buttons: [
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', title: 'О&nbsp;программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', title: 'Настройки', float: 'right'},
				{name: 'events', text: '<i class="fa fa-calendar-check-o md-fa-lg"></i>', title: 'Планирование', float: 'right'},
				{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', title: 'Документы', float: 'right'},
				{name: 'clients', text: '<i class="fa fa-user md-fa-lg"></i>', title: 'Клиенты', float: 'right'}

			], onclick: function (name) {
				$p.iface.main.cells(name).setActive(true);
				return false;
			}
		});

	}

	if(!$p.iface._events)
		$p.iface._events = new OViewEvents();

	return $p.iface._events;

};

/**
 * http://localhost/metadelegate/#obj=cat.Партнеры&ref=cbcf497b-55bc-11d9-848a-00112f43529a&frm=doc&view=orders
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author  Evgeniy Malyarov
 * @module  view_orders
 */

$p.iface.view_orders = function (cell) {

	function OViewOrders(){

		var t = this, _tab,
			_tabs = [
				{id: "orders", text: '<i class="fa fa-suitcase"></i> Заказы', class_name: "doc.ЗаказКлиента", active: true},
				{id: "pays", text: '<i class="fa fa-money"></i> Оплаты', class_name: "doc.ПриходныйКассовыйОрдер"},
				{id: "shipments", text: '<i class="fa fa-shopping-bag"></i> Продажи', class_name: "doc.РеализацияТоваровУслуг"},
				{id: "balance", text: '<i class="fa fa-balance-scale"></i> Баланс'}
			];

		function show_list(){

			var _cell = t.carousel.cells("list"),
				def_prm = {
					hide_header: true,
					date_from: new Date((new Date()).getFullYear().toFixed() + "-01-01")
				};

			if(t.carousel.getActiveCell() != _cell)
				_cell.setActive();

			if(!t.tabs){

				_cell.detachObject(true);
				t.tabs = _cell.attachTabbar({
					arrows_mode:    "auto",
					tabs: _tabs
				});

				t.tabs.attachEvent("onSelect", function(id, lastId){
					if(_tab && _tab.id != id){
						var tab = _tabs.filter(function (val) { return val.id == id; })[0];
						if(tab.class_name)
							$p.iface.set_hash(tab.class_name, "");
					}						
					return true;
				});

				t._orders = $p.doc.ЗаказКлиента.form_list(t.tabs.cells("orders"), def_prm);
				t._pays = $p.doc.ПриходныйКассовыйОрдер.form_list(t.tabs.cells("pays"), def_prm);
				t._shipments = $p.doc.РеализацияТоваровУслуг.form_list(t.tabs.cells("shipments"), def_prm);
				t._balance = t.tabs.cells("balance").attachHTMLString($p.injected_data['view_balance.html']);

				// TODO: заплата, исправляющая заголовки
				setTimeout(function () {
					_tabs.forEach(function (tab) {
						t.tabs.cells(tab.id).setText(tab.text);
					});
					if(_tab && t.tabs.getActiveTab() != _tab.id)
						t.tabs.cells(_tab.id).setActive();
				});

			}

		}

		function show_doc(ref){

			var _cell = t.carousel.cells("doc");

			if(t.carousel.getActiveCell() != _cell)
				_cell.setActive();

			if(_tab && (!_cell.ref || _cell.ref != ref))
				$p.md.mgr_by_class_name(_tab.class_name).form_obj(_cell, {
						ref: ref,
						bind_pwnd: true,
						on_close: function () {
							setTimeout(function () {
								$p.iface.set_hash(undefined, "", "list");
							});
						}
					})
					.then(function (wnd) {
						t.doc = wnd;
					});
		}


		// переключает закладку в соответствии с hprm.obj при маршрутизации
		function select_tab(obj){
			_tab = undefined;
			_tabs.forEach(function (tab) {
				if(tab.class_name == obj){
					if(t.tabs && t.tabs.getActiveTab() != tab.id)
						t.tabs.cells(tab.id).setActive();
					_tab = tab;
				}
			});
		}

		/**
		 * Обработчик маршрутизации url
		 * @param hprm
		 * @return {boolean}
		 */
		function hash_route(hprm) {

			if(hprm.view == "orders"){

				if($p.eve.logged_in){

					select_tab(hprm.obj);

					if(_tab && !$p.is_empty_guid(hprm.ref)){

						if(hprm.frm != "doc")
							setTimeout(function () {
								$p.iface.set_hash(undefined, undefined, "doc");
							});
						else
							show_doc(hprm.ref);


					} else if(!_tab || $p.is_empty_guid(hprm.ref) || hprm.frm == "list"){

						if(!_tab)
							setTimeout(function () {
								$p.iface.set_hash("doc.ЗаказКлиента", "", "list");
							});
						else
							show_list();
					}
				}

				return false;
			}

		}

		function on_log_in(){

			// имитируем переход
			var hprm = $p.job_prm.parse_url(),
				obj = hprm.obj || "doc.ЗаказКлиента";

			if(hprm.view == "orders")
				setTimeout(function () {
					$p.iface.set_hash(obj);
				});
		}

		// Рисуем дополнительные элементы навигации
		t.tb_nav = new $p.iface.OTooolBar({
			wrapper: cell.cell.querySelector(".dhx_cell_sidebar_hdr"),
			class_name: 'md_otbnav',
			width: '220px', height: '28px', top: '3px', right: '3px', name: 'right',
			buttons: [
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', title: 'О&nbsp;программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', title: 'Настройки', float: 'right'},
				{name: 'events', text: '<i class="fa fa-calendar-check-o md-fa-lg"></i>', title: 'Планирование', float: 'right'},
				{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', title: 'Документы', float: 'right'},
				{name: 'clients', text: '<i class="fa fa-user md-fa-lg"></i>', title: 'Клиенты', float: 'right'}

			], onclick: function (name) {
				$p.iface.main.cells(name).setActive(true);
				return false;
			}
		});

		// страницы карусели
		t.carousel = cell.attachCarousel({
			keys:           false,
			touch_scroll:   false,
			offset_left:    0,
			offset_top:     4,
			offset_item:    0
		});
		t.carousel.hideControls();
		t.carousel.addCell("list");
		t.carousel.addCell("doc");


		// Рисуем стандартную форму аутентификации. К ней уже привязан алгоритм входа по умолчанию
		// При необходимости, можно реализовать клиентские сертификаты, двухфакторную авторизацию с одноразовыми sms и т.д.
		if($p.eve.logged_in)
			setTimeout(on_log_in);
		else
			$p.iface.frm_auth({	cell: t.carousel.cells("list") }, null, $p.record_log );


		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.eve.hash_route.push(hash_route);


		// слушаем событие online-offline


		// слушаем событие авторизации и входа в систему
		$p.eve.attachEvent("log_in", on_log_in);

	}

	if(!$p.iface._orders)
		$p.iface._orders = new OViewOrders();

	return $p.iface._orders;

};

/**
 *
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @author  Evgeniy Malyarov
 * @module  view_settings
 */

$p.iface.view_settings = function (cell) {

	function OViewSettings(){

		var t = this;

		function hash_route(hprm) {

			if(hprm.view == "settings"){

				return false;
			}

		}


		t.tb_nav = new $p.iface.OTooolBar({
			wrapper: cell.cell.querySelector(".dhx_cell_sidebar_hdr"),
			class_name: 'md_otbnav',
			width: '200px', height: '28px', top: '3px', right: '3px', name: 'right',
			buttons: [
				{name: 'about', text: '<i class="fa fa-info-circle md-fa-lg"></i>', title: 'О&nbsp;программе', float: 'right'},
				{name: 'settings', text: '<i class="fa fa-cog md-fa-lg"></i>', title: 'Настройки', float: 'right'},
				{name: 'events', text: '<i class="fa fa-calendar-check-o md-fa-lg"></i>', title: 'Планирование', float: 'right'},
				{name: 'orders', text: '<i class="fa fa-suitcase md-fa-lg"></i>', title: 'Документы', float: 'right'},
				{name: 'clients', text: '<i class="fa fa-user md-fa-lg"></i>', title: 'Клиенты', float: 'right'}


			], onclick: function (name) {
				$p.iface.main.cells(name).setActive(true);
				return false;
			}
		});

		cell.attachHTMLString($p.injected_data['view_settings.html']);
		t.cell = cell.cell.querySelector(".dhx_cell_cont_sidebar");
		t.cell.style.overflow = "auto";
		t.form = t.cell.querySelector("[name=form1]");
		t.form = new dhtmlXForm(t.form.firstChild, [

			{ type:"settings", labelWidth:80, position:"label-left"  },

			{type: "label", labelWidth:320, label: "Тип устройства", className: "label_options"},
			{ type:"block" , name:"form_block_2", list:[
				{ type:"settings", labelAlign:"left", position:"label-right"  },
				{ type:"radio" , name:"device_type", labelWidth:120, label:'<i class="fa fa-desktop"></i> Компьютер', value:"desktop"},
				{ type:"newcolumn"   },
				{ type:"radio" , name:"device_type", labelWidth:150, label:'<i class="fa fa-mobile fa-lg"></i> Телефон, планшет', value:"phone"},
			]  },
			{type:"template", label:"",value:"", note: {text: "Класс устройства определяется автоматически, но пользователь может задать его явно", width: 320}},

			{type: "label", labelWidth:320, label: "Адрес http сервиса 1С", className: "label_options"},
			{type:"input" , inputWidth: 220, name:"rest_path", label:"Путь", validate:"NotEmpty"},
			{type:"template", label:"",value:"",
				note: {text: "Можно указать как относительный, так и абсолютный URL публикации 1С OData. " +
				"О настройке кроссдоменных запросов к 1С <a href='#'>см. здесь</a>", width: 320}},

			{type: "label", labelWidth:320, label: "Значение разделителя публикации 1С fresh", className: "label_options"},
			{type:"input" , inputWidth: 220, name:"zone", label:"Зона", numberFormat: ["0", "", ""], validate:"NotEmpty,ValidInteger"},
			{type:"template", label:"",value:"", note: {text: "Для неразделенной публикации, зона = 0", width: 320}},

			{type: "label", labelWidth:320, label: "Сохранять пароль пользователя", className: "label_options"},
			{type:"checkbox", name:"enable_save_pwd", label:"Разрешить", checked: $p.wsql.get_user_param("enable_save_pwd", "boolean")},
			{type:"template", label:"",value:"", note: {text: "Не рекомендуется, если к компьютеру имеют доступ посторонние лица", width: 320}},
			{type:"template", label:"",value:"", note: {text: "", width: 320}},

			{type: "button", name: "save", value: "Применить настройки"}

			]
		);

		// инициализация свойств

		t.form.checkItem("device_type", $p.wsql.get_user_param("device_type"));

		["zone", "rest_path"].forEach(function (prm) {
			t.form.setItemValue(prm, $p.wsql.get_user_param(prm));
		});

		t.form.attachEvent("onChange", function (name, value, state){
			$p.wsql.set_user_param(name, name == "enable_save_pwd" ? value || "" : value);
		});

		t.form.attachEvent("onButtonClick", function(name){
			location.reload();
		});

		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.eve.hash_route.push(hash_route);

	}

	if(!$p.iface._settings)
		$p.iface._settings = new OViewSettings();

	return $p.iface._settings;

};

return undefined;
}));
