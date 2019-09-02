/*global systemDictionary:true */
'use strict';

systemDictionary = {
    'Cancel': {                                      'en': 'cancel',                                          'de': 'abbrechen',                                       'ru': 'отменить',                                        'pt': 'cancelar',                                        'nl': 'annuleren',                                       'fr': 'Annuler',                                         'it': 'Annulla',                                         'es': 'cancelar',                                        'pl': 'Anuluj',                                          'zh-cn': '取消'},
    'Select': {                                      'en': 'select',                                          'de': 'wählen',                                          'ru': 'Выбрать',                                         'pt': 'selecionar',                                      'nl': 'kiezen',                                          'fr': 'sélectionner',                                    'it': 'selezionare',                                     'es': 'seleccionar',                                     'pl': 'Wybierz',                                         'zh-cn': '选择'},
    'alarm_Chips': {                                 'en': 'States for alarm circuit',                        'de': 'Zustände für den Alarmkreis',                     'ru': 'Состояния для аварийной цепи',                    'pt': 'Estados para circuito de alarme',                 'nl': 'Staten voor alarmcircuit',                        'fr': "États pour le circuit d'alarme",                  'it': 'Stati per circuito di allarme',                   'es': 'Estados para circuito de alarma',                 'pl': 'Stany dla obwodu alarmowego',                     'zh-cn': '报警电路的状态'},
    'disabled': {                                    'en': 'disabled',                                        'de': 'deaktiviert',                                     'ru': 'отключен',                                        'pt': 'Desativado',                                      'nl': 'invalide',                                        'fr': 'désactivée',                                      'it': 'Disabilitato',                                    'es': 'discapacitado',                                   'pl': 'wyłączone',                                       'zh-cn': '残'},
    'general': {                                     'en': 'Main settings',                                   'de': 'Haupteinstellungen',                              'ru': 'Основные параметры',                              'pt': 'Configurações principais',                        'nl': 'Belangrijkste instellingen',                      'fr': 'Réglages principaux',                             'it': 'Impostazioni principali',                         'es': 'Ajustes principales',                             'pl': 'Ustawienia główne',                               'zh-cn': '主要设置'},
    'myalarm adapter settings': {                    'en': 'Adapter settings for myalar',                     'de': 'Adaptereinstellungen für myalarm',                'ru': 'Настройки адаптера для myalarm',                  'pt': 'Configurações do adaptador para myalarm',         'nl': 'Adapterinstellingen voor myalarm',                'fr': "Paramètres d'adaptateur pour myalarm",            'it': "Impostazioni dell'adattatore per myalarm",        'es': 'Ajustes del adaptador para myalarm',              'pl': 'Ustawienia adaptera dla myalarm',                 'zh-cn': 'myalar的适配器设置'},
    'night_Chips': {                                 'en': 'States for night rest circuit',                   'de': 'Zustände für die Nachtruhe',                      'ru': 'Штаты для ночного отдыха',                        'pt': 'Estados para circuito de descanso noturno',       'nl': 'Staten voor nachtrustcircuit',                    'fr': 'États pour circuit de nuit',                      'it': 'Stati per il circuito di riposo notturno',        'es': 'Estados para el circuito de descanso nocturno.',  'pl': 'Stany na nocny obwód odpoczynku',                 'zh-cn': '国家为夜间休息电路'},
    'night_from': {                                  'en': 'Begins of the night rest',                        'de': 'Beginn der Nachtruhe',                            'ru': 'Начинается ночной отдых',                         'pt': 'Começa do resto da noite',                        'nl': 'Begin van de nachtrust',                          'fr': 'Commence la nuit repos',                          'it': 'Inizia il riposo notturno',                       'es': 'Comienzo del descanso nocturno.',                 'pl': 'Zaczyna się nocny odpoczynek',                    'zh-cn': '开始的夜晚休息'},
    'night_to': {                                    'en': 'Ends of the night rest',                          'de': 'Ende der Nachtruhe',                              'ru': 'Концы ночного отдыха',                            'pt': 'Termina do resto da noite',                       'nl': 'Einde van de nachtrust',                          'fr': 'Fin de la nuit repos',                            'it': 'Fine del riposo notturno',                        'es': 'Finales del descanso nocturno.',                  'pl': 'Koniec nocnego odpoczynku',                       'zh-cn': '晚上休息'},
    'opt_log': {                                     'en': 'Log output',                                      'de': 'Ausgabe protokollieren',                          'ru': 'Выход журнала',                                   'pt': 'Saída de log',                                    'nl': 'Log output',                                      'fr': 'Journal de sortie',                               'it': "Registrare l'output",                             'es': 'Salida de registro',                              'pl': 'Wynik dziennika',                                 'zh-cn': '记录输出'},
    'opt_night': {                                   'en': 'Control configured states during night rest',     'de': 'Konfigurierte Zustände während der Nachtruhe überwachen', 'ru': 'Контроль настроенных состояний во время ночного отдыха', 'pt': 'Controle configurado estados durante o resto da noite', 'nl': 'Controleer geconfigureerde staten tijdens nachtrust', 'fr': 'Contrôler les états configurés pendant le repos de nuit', 'it': 'Controllare gli stati configurati durante il riposo notturno', 'es': 'Control de estados configurados durante el descanso nocturno.', 'pl': 'Kontroluj skonfigurowane stany podczas nocnego odpoczynku', 'zh-cn': '在夜间休息期间控制配置状态'},
    'opt_warning': {                                 'en': 'Ignore configured warning states at activation',  'de': 'Konfigurierte Warnzustände bei der Aktivierung ignorieren', 'ru': 'Игнорировать настроенные состояния предупреждения при активации', 'pt': 'Ignore os estados de aviso configurados na ativação', 'nl': 'Negeer geconfigureerde waarschuwingsstatussen bij activering', 'fr': "Ignorer les états d'avertissement configurés lors de l'activation", 'it': "Ignora gli stati di avviso configurati all'attivazione", 'es': 'Ignorar los estados de advertencia configurados en la activación', 'pl': 'Zignoruj ​​skonfigurowane stany ostrzeżeń przy aktywacji', 'zh-cn': '激活时忽略已配置的警告状态'},
    'sayit': {                                       'en': 'Sayit settings',                                  'de': 'Sayit-Einstellungen',                             'ru': 'Сайит настройки',                                 'pt': 'Configurações Sayit',                             'nl': 'Sayit-instellingen',                              'fr': 'Paramètres Sayit',                                'it': 'Impostazioni Sayit',                              'es': 'Configuración de Sayit',                          'pl': 'Sayit ustawienia',                                'zh-cn': 'Sayit设置'},
    'sayit_instance': {                              'en': 'Sayit instance',                                  'de': 'Sayit Instanz',                                   'ru': 'Саит инстанс',                                    'pt': 'Sayit instance',                                  'nl': 'Sayit-instantie',                                 'fr': 'Instance Sayit',                                  'it': 'Istanza Sayit',                                   'es': 'Instancia de Sayit',                              'pl': 'Sayit instancja',                                 'zh-cn': 'Sayit实例'},
    'sendTo_Chips': {                                'en': 'Notification instnces like Email, Pushover or Telegram', 'de': 'Benachrichtigungsinstanzen wie E-Mail, Pushover oder Telegramm', 'ru': 'Уведомления, такие как Email, Pushover или Telegram', 'pt': 'Instâncias de notificação como E-mail, pushover ou telegrama', 'nl': 'Meldingen zoals e-mail, pushover of telegram',    'fr': 'Instance de notification comme Email, Pushover ou Telegram', 'it': 'Le notifiche funzionano come Email, Pushover o Telegram', 'es': 'Instancias de notificación como correo electrónico, pushover o telegrama', 'pl': 'Powiadomienia, takie jak poczta e-mail, pushover lub telegram', 'zh-cn': '通知单，例如电子邮件，Pushover或Telegram'},
    'send_alarm': {                                  'en': 'Notifications at burgle',                         'de': 'Benachrichtigungen bei Einbruch',                 'ru': 'Уведомления на Burgle',                           'pt': 'Notificações no burgle',                          'nl': 'Meldingen bij inbraak',                           'fr': 'Notifications à burgle',                          'it': 'Notifiche al burgle',                             'es': 'Notificaciones en burgle',                        'pl': 'Powiadomienia w burgle',                          'zh-cn': '在burgle的通知'},
    'send_night': {                                  'en': 'Notifications during night rest',                 'de': 'Benachrichtigungen während der Nachtruhe',        'ru': 'Уведомления во время ночного отдыха',             'pt': 'Notificações durante o descanso noturno',         'nl': 'Meldingen tijdens nachtrust',                     'fr': 'Notifications pendant le repos de nuit',          'it': 'Notifiche durante il riposo notturno',            'es': 'Notificaciones durante el descanso nocturno.',    'pl': 'Powiadomienia podczas nocnego odpoczynku',        'zh-cn': '夜间休息时的通知'},
    'send_warning': {                                'en': 'Notifications at warnings',                       'de': 'Benachrichtigungen bei Warnungen',                'ru': 'Уведомления при предупреждениях',                 'pt': 'Notificações em avisos',                          'nl': 'Meldingen bij waarschuwingen',                    'fr': 'Notifications aux avertissements',                'it': 'Notifiche agli avvisi',                           'es': 'Notificaciones en advertencias',                  'pl': 'Powiadomienia na ostrzeżeniach',                  'zh-cn': '警告时的通知'},
    'states': {                                      'en': 'States',                                          'de': 'Zustände',                                        'ru': 'состояния',                                       'pt': 'Estados',                                         'nl': 'Staten',                                          'fr': 'États',                                           'it': 'stati',                                           'es': 'Estados',                                         'pl': 'Stany Zjednoczone',                               'zh-cn': '状态'},
    'text_activated': {                              'en': 'Phrase after activation',                         'de': 'Satz nach Aktivierung',                           'ru': 'Фраза после активации',                           'pt': 'Frase após ativação',                             'nl': 'Zin na activering',                               'fr': 'Phrase après activation',                         'it': "Frase dopo l'attivazione",                        'es': 'Frase después de la activación',                  'pl': 'Zdanie po aktywacji',                             'zh-cn': '激活后的短语'},
    'text_alarm': {                                  'en': 'Phrase at burgle',                                'de': 'Satz bei Einbruch',                               'ru': 'Фраза в бургле',                                  'pt': 'Frase no burgle',                                 'nl': 'Zin in inbraak',                                  'fr': 'Phrase à burgle',                                 'it': 'Frase al burgle',                                 'es': 'Frase en Burgle',                                 'pl': 'Zdanie w burgle',                                 'zh-cn': '在burgle的短语'},
    'text_deactivated': {                            'en': 'Phrase after deactivation',                       'de': 'Satz nach Deaktivierung',                         'ru': 'Фраза после деактивации',                         'pt': 'Frase após desativação',                          'nl': 'Zin na deactivering',                             'fr': 'Phrase après la désactivation',                   'it': 'Frase dopo la disattivazione',                    'es': 'Frase después de la desactivación',               'pl': 'Zdanie po dezaktywacji',                          'zh-cn': '停用后的短语'},
    'text_failed': {                                 'en': 'Phrase at failure',                               'de': 'Satz beim fehlschlagen der Aktivierung',          'ru': 'Фраза при неудаче',                               'pt': 'Frase ao fracasso',                               'nl': 'Zin bij falen',                                   'fr': "Phrase à l'échec",                                'it': 'Frase al fallimento',                             'es': 'Frase en el fracaso',                             'pl': 'Fraza przy awarii',                               'zh-cn': '失败的短语'},
    'text_warning': {                                'en': 'Phrase at warnings',                              'de': 'Satz bei Warnungen',                              'ru': 'Фраза в предупреждениях',                         'pt': 'Frase em avisos',                                 'nl': 'Zin bij waarschuwingen',                          'fr': 'Phrase aux avertissements',                       'it': 'Frase agli avvertimenti',                         'es': 'Frase en las advertencias',                       'pl': 'Fraza na ostrzeżenia',                            'zh-cn': '警告短语'},
    'time_activate': {                               'en': 'Activation time in seconds',                      'de': 'Aktivierungszeit in Sekunden',                    'ru': 'Время активации',                                 'pt': 'Tempo de ativação',                               'nl': 'Activeringstijd',                                 'fr': "Temps d'activation",                              'it': 'Tempo di attivazione',                            'es': 'Tiempo de activacion',                            'pl': 'Czas aktywacji',                                  'zh-cn': '激活时间（秒）'},
    'time_alarm': {                                  'en': 'Siren time at burgle in seconds',                 'de': 'Sirenenzeit bei Einbruch in Sekunden',            'ru': 'Сирена время в Burgle',                           'pt': 'Hora da sirene no burgle',                        'nl': 'Sirenetijd bij inbraak',                          'fr': 'Temps de sirène à burgle',                        'it': 'Ora della sirena al burgle',                      'es': 'Tiempo de sirena en burgle',                      'pl': 'Czas syreny w burgle',                            'zh-cn': '警报器的警笛时间在几秒钟内'},
    'warning_Chips': {                               'en': 'States for warning circuit',                      'de': 'Zustände für den Warnkreis',                      'ru': 'Состояния для предупреждения цепи',               'pt': 'Estados para circuito de aviso',                  'nl': 'Staten voor waarschuwingscircuit',                'fr': "États pour le circuit d'avertissement",           'it': 'Stati per circuito di allarme',                   'es': 'Estados para circuito de advertencia',            'pl': 'Stany do obwodu ostrzegawczego',                  'zh-cn': '国家警告电路'},
    'shortcuts': {                                   'en': 'shortcuts',                                       'de': 'Verknüpfungen',                                   'ru': 'сочетания',                                       'pt': 'atalhos',                                         'nl': 'snelkoppelingen',                                 'fr': 'raccourcis',                                      'it': 'scorciatoie',                                     'es': 'atajos',                                          'pl': 'skróty',                                          'zh-cn': '快捷键'},
    'active': {                                      'en': 'active',                                          'de': 'aktiv',                                           'ru': 'активный',                                        'pt': 'ativo',                                           'nl': 'actief',                                          'fr': 'actif',                                           'it': 'attivo',                                          'es': 'activo',                                          'pl': 'aktywny',                                         'zh-cn': '活性'},
    'Name': {                                        'en': 'name',                                            'de': 'Name',                                            'ru': 'название',                                        'pt': 'nome',                                            'nl': 'naam',                                            'fr': 'prénom',                                          'it': 'nome',                                            'es': 'nombre',                                          'pl': 'Nazwa',                                           'zh-cn': '名称'},
    'Object-ID': {                                   'en': 'object ID',                                       'de': 'Objekt ID',                           'ru': 'идентификатор объекта',                           'pt': 'ID do objeto',                                    'nl': 'object ID',                                       'fr': "ID d'objet",                                      'it': 'ID oggetto',                                      'es': 'ID de objeto',                                    'pl': 'identyfikator obiektu',                           'zh-cn': '对象ID'},
    'alarm': {                                       'en': 'alarm circuit',                                   'de': 'Alarmkreis',                                  'ru': 'цепь сигнализации',                               'pt': 'circuito de alarme',                              'nl': 'alarmcircuit',                                    'fr': "circuit d'alarme",                                'it': 'circuito di allarme',                             'es': 'circuito de alarma',                              'pl': 'obwód alarmowy',                                  'zh-cn': '报警电路'},
    'warning': {                                     'en': 'warning circuit',                                 'de': 'Warnkreis',                                   'ru': 'цепь предупреждения',                             'pt': 'circuito de aviso',                               'nl': 'waarschuwingscircuit',                            'fr': "circuit d'alerte",                                'it': 'circuito di avvertimento',                        'es': 'circuito de advertencia',                         'pl': 'obwód ostrzegawczy',                              'zh-cn': '警告电路'},
    'night': {                                       'en': 'night circuit',                                   'de': 'Nachtkreis',                                  'ru': 'ночной кругооборот',                              'pt': 'circuito noturno',                                'nl': 'nachtcircuit',                                    'fr': 'circuit de nuit',                                 'it': 'circuito notturno',                               'es': 'circuito nocturno',                               'pl': 'obwód nocny',                                     'zh-cn': '夜间电路'},
    'negativ': {                                     'en': 'negate',                                          'de': 'negieren',                                        'ru': 'отрицать',                                        'pt': 'negar',                                           'nl': 'ontkennen',                                       'fr': 'nier',                                            'it': 'negare',                                          'es': 'negar',                                           'pl': 'negować',                                         'zh-cn': '否定'},
};
