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