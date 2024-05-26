{
    "id": "12",
    "type": "text",
    "value": "Никифорова Вероника Анатольевна",
    "readOnly": true,
    "multiline": false,
    "allowTabs": false,
    "script": false,
    "mask": "",
    "eventable": false,
    "minRows": false,
    "config": {
        "type": "text",
        "mask": "",
        "fields": [],
        "mode": "list"
    },
    "i18n": {
        "options": {
            "debug": false,
            "initImmediate": true,
            "ns": [
                "translation"
            ],
            "defaultNS": [
                "translation"
            ],
            "fallbackLng": [
                "ru"
            ],
            "fallbackNS": false,
            "supportedLngs": [
                "ru",
                "en",
                "cimode"
            ],
            "nonExplicitSupportedLngs": true,
            "load": "all",
            "preload": false,
            "simplifyPluralSuffix": true,
            "keySeparator": ".",
            "nsSeparator": ":",
            "pluralSeparator": "_",
            "contextSeparator": "_",
            "partialBundledLanguages": false,
            "saveMissing": false,
            "updateMissing": false,
            "saveMissingTo": "fallback",
            "saveMissingPlurals": true,
            "missingKeyHandler": false,
            "missingInterpolationHandler": false,
            "postProcess": false,
            "postProcessPassResolved": false,
            "returnNull": true,
            "returnEmptyString": true,
            "returnObjects": false,
            "joinArrays": false,
            "returnedObjectHandler": false,
            "parseMissingKeyHandler": false,
            "appendNamespaceToMissingKey": false,
            "appendNamespaceToCIMode": false,
            "interpolation": {
                "escapeValue": false,
                "prefix": "{{",
                "suffix": "}}",
                "formatSeparator": ",",
                "unescapePrefix": "-",
                "nestingPrefix": "$t(",
                "nestingSuffix": ")",
                "nestingOptionsSeparator": ",",
                "maxReplaces": 1000,
                "skipOnVariables": true
            },
            "resources": {
                "ru": {
                    "translation": {
                        "title": "Bpium",
                        "colors": {
                            "red": "Красный",
                            "orange": "Оранжевый",
                            "yellow": "Желтый",
                            "lemon": "Лимонный",
                            "scarlet": "Алый",
                            "white": "Белый",
                            "grey": "Серый",
                            "green": "Зеленый",
                            "violet": "Фиолетовый",
                            "blue": "Синий",
                            "lightBlue": "Голубой",
                            "mint": "Мятный"
                        },
                        "auth": {
                            "reenter": "Перезайти",
                            "username": "Электронная почта",
                            "passwordResetTitle": "Восстановление пароля",
                            "passwordReset": "Восстановить пароль",
                            "resetingPassword": "Восстановление пароля",
                            "resetPassword": "Восстановить пароль",
                            "fieldHintMessage": "Заполните это поле.",
                            "cancel": "Отмена",
                            "enter": "Вход",
                            "enterOtherUser": "Войти под другой учетной записью",
                            "login": "Войти",
                            "changeAddress": "Изменить адрес",
                            "logout": "Выйти",
                            "password": "Пароль",
                            "repeatPassword": "Пароль еще раз",
                            "create": "Создать",
                            "setPass": "Создание пароля",
                            "paymentRequired": "Доступ ограничен",
                            "toCompanyList": "Вернуться к списку компаний",
                            "errors": {
                                "tokenNotFound": "Токен не найден",
                                "specifyEmail": "Укажите адрес электронной почты",
                                "emailNotRegistered": "Почта не зарегистрирована",
                                "wrongCode": "Неверный код",
                                "minLength": "Пароль должен содержать минимум 6 символов",
                                "notEqual": "Пароли не совпадают",
                                "invalidCredentials": "Учетные данные неверны",
                                "somethingWrong": "Что-то пошло не так.",
                                "tooManyRequests": "Превышен лимит запросов к серверу"
                            },
                            "messages": {
                                "companyCreating": "Создается компания...",
                                "companyLimited": "Вы имеете доступ к компании {{company}}, но доступ по лицензии запрещен",
                                "instructionsSent": "Инструкция отправлена на {{email}}. Если вы не получили письмо, проверьте папку «Спам»."
                            },
                            "payment": {
                                "domainControls": "Доменом и лицензиями управляет",
                                "enterAs": "Вы авторизованы под учетной записью"
                            },
                            "activate": {
                                "users": {
                                    "count_zero": "{{count}} сотрудников",
                                    "count_one": "{{count}} сотрудник",
                                    "count_two": "{{count}} сотрудника",
                                    "count_few": "{{count}} сотрудника",
                                    "count_many": "{{count}} сотрудников",
                                    "count_other": "{{count}} сотрудника"
                                },
                                "extUsers": {
                                    "count_zero": "{{count}} внешних сотрудников",
                                    "count_one": "{{count}} внешних сотрудник",
                                    "count_two": "{{count}} внешних сотрудника",
                                    "count_few": "{{count}} внешних сотрудников",
                                    "count_many": "{{count}} внешних сотрудников",
                                    "count_other": "{{count}} внешних сотрудника"
                                },
                                "records": "Записей: ",
                                "catalogs": "Каталогов: ",
                                "unlimited": "бессрочно",
                                "active": "Активна до",
                                "notLimited": "Не ограничено",
                                "domainInUse": "Домен уже используется",
                                "invalidToken": "Token не валиден",
                                "title": "Активация лицензии",
                                "license": "Лицензия",
                                "code": "Активационный код",
                                "wrongCode": "Неверный код",
                                "getLicense": "Получите лицензию на",
                                "enterCode": "Введите код лицензии",
                                "activate": "Активировать"
                            },
                            "company": {
                                "companyCreate": "Создание компании",
                                "companyName": "Название компании",
                                "address": "Адрес компании в системе",
                                "adressHint": "английские буквы, цифры и дефис",
                                "phone": "Телефон",
                                "name": "Ваше имя"
                            }
                        },
                        "chats": {
                            "title": "Чаты",
                            "emptyChats": "Напишите сообщение в комментариях какой-либо записи, и оно появится здесь.",
                            "message": {
                                "titleAuthorIsMe": "Вы",
                                "unknownAuthorTitle": "Система"
                            }
                        },
                        "userMenu": {
                            "userInfo": {
                                "logout": "Выйти"
                            },
                            "background": {
                                "backgroundFromYou": "Фон для вас"
                            },
                            "license": {
                                "licenseTitle": "Лицензия",
                                "licenseEmpty": "Лицензия не найдена...",
                                "countRecords": "записей",
                                "licenseWorks": "Действует",
                                "remainedDate": {
                                    "count_zero": "остался",
                                    "count_one": "остался",
                                    "count_two": "осталось",
                                    "count_few": "осталось",
                                    "count_many": "осталось",
                                    "count_other": "осталось"
                                },
                                "remainedRecords": {
                                    "count_zero": "осталось {{count}}",
                                    "count_one": "осталась {{count}}",
                                    "count_two": "осталось {{count}}",
                                    "count_few": "осталось {{count}}",
                                    "count_many": "осталось {{count}}",
                                    "count_other": "осталось {{count}}"
                                },
                                "before": "До",
                                "toExtend": "Продлить на 3 месяца",
                                "buttons": {
                                    "changeParams": "Изменить параметры",
                                    "downloadInvoice": "Скачать счет",
                                    "onlinePay": "Оплатить онлайн"
                                }
                            },
                            "feedback": {
                                "feedbackTitle": "Обратная связь",
                                "feedbackSuccess": "Запрос отправлен",
                                "feedbackError": "Ошибка отправки",
                                "phone": "Телефон",
                                "email": "Электронная почта",
                                "message": "Запрос из приложения: {{message}}.",
                                "buttons": {
                                    "sendRequest": "Отправить запрос",
                                    "repeat": "Повторить",
                                    "cancel": "Отмена"
                                }
                            },
                            "helpers": {
                                "helpDocumentation": "Документация",
                                "helpQuestionToSales": "Задать вопрос"
                            }
                        },
                        "sidebar": {
                            "header": "Каталоги",
                            "newCatalog": "Новый каталог"
                        },
                        "menuPopover": {
                            "searchCatalog": "Найти каталог...",
                            "searchCompany": "Найти компанию...",
                            "addFavorite": "Добавить в избранное",
                            "removeFavorite": "Убрать из избранных",
                            "menu": "Меню",
                            "searchEmpty": "Каталоги не найдены",
                            "searchSideEmpty": "Ничего не найдено"
                        },
                        "buttons": {
                            "addTab": "Добавить новую вкладку",
                            "next": "Продолжить",
                            "displayParams": "Параметры отображения",
                            "cancel": "Отменить",
                            "save": "Сохранить",
                            "saveAs": "Сохранить как...",
                            "savePrivate": "Сохранить как личный вид",
                            "saving": "Сохранение...",
                            "access": "Доступ",
                            "accessSection": "Доступ к отделу",
                            "accessCatalog": "Доступ к каталогу",
                            "accessView": "Доступ к виду",
                            "refresh": "Обновить",
                            "filterNewMessages": "Показать записи с новыми сообщениями",
                            "filterAllRecords": "Показать все записи",
                            "remove": "Удалить",
                            "removeSection": "Удалить отдел",
                            "removeCatalog": "Удалить каталог",
                            "truncateCatalog": "Удалить все записи",
                            "removeView": "Удалить вид",
                            "removeRecord": "Удалить запись",
                            "edit": "Изменить",
                            "add": "Добавить",
                            "import": "Импорт из Excel",
                            "export": "Экспорт в Excel",
                            "rename": "Переименовать",
                            "renameSection": "Переименовать",
                            "changeIcon": "Изменить иконку",
                            "create": "Сохранить",
                            "createSection": "Отдел",
                            "configureSection": "Параметры отдела",
                            "creating": "Создание...",
                            "clear": "Очистить",
                            "configureCatalog": "Настроить поля",
                            "help": "Документация",
                            "clone": "Клонировать",
                            "download": "Скачать",
                            "exit": "Выйти",
                            "beta": "Бета",
                            "betaTitle": "находится в бета-тестировании",
                            "batchUpdateRecords": "Изменить все",
                            "oneColumn": "Одна колонка",
                            "twoColumns": "Две колонки",
                            "threeColumns": "Три колонки"
                        },
                        "timer": {
                            "autoUpdate": "Автообновление"
                        },
                        "refreshVersion": {
                            "newVersion": "Новая версия",
                            "refresh": "Обновить"
                        },
                        "loadingText": "Загрузка...",
                        "loadingError": "Ошибка загрузки данных",
                        "emptyUser": "<Сотрудник не найден>",
                        "catalogData": {
                            "indexFieldName": "№",
                            "history": {
                                "record": "Запись",
                                "action": "Действие",
                                "employee": "Сотрудник",
                                "allEmployers": "Все сотрудники"
                            },
                            "historyActions": {
                                "allActions": "Все действия",
                                "create": "Создание записей",
                                "update": "Изменение записей",
                                "remove": "Удаление записей",
                                "clearAll": "Очистить все",
                                "actions": "Действия"
                            },
                            "expandedQuickSearch": "🔎︎ Быстрый поиск",
                            "quickSearch": "🔎︎ Поиск",
                            "tooltip": {
                                "filterExpand": "Развернуть фильтр",
                                "filterCollapse": "Свернуть фильтр"
                            },
                            "types": {
                                "table": "Записи",
                                "cards": "Плитка",
                                "reports": "Отчеты",
                                "history": "Активность",
                                "statistics": "Подсчет",
                                "calendar": "Календарь"
                            },
                            "dropFieldHere": "Перетащите поле в эту область"
                        },
                        "helper": {
                            "searchResults": "Результаты поиска",
                            "title": "Подсказки",
                            "notFoundByLanguage": "Нет подсказок для выбранного языка",
                            "morePosts": "Дополнительные статьи",
                            "notFound": "Подсказки не найдены",
                            "all": "Все подсказки",
                            "searchText": "Поиск подсказок..."
                        },
                        "section": {
                            "search": "Поиск",
                            "menu": {
                                "property": "Свойства отдела",
                                "fixedMenuExpand": "Закрепить меню",
                                "fixedMenuCollapse": "Свернуть меню",
                                "create": "отдел",
                                "createCompany": "компанию"
                            }
                        },
                        "catalogEditor": {
                            "sectionPlaceholder": "Выберите отдел",
                            "namePlaceholder": "Введите название каталога",
                            "dragFieldToEditor": "Перетащите поле в анкету",
                            "field": {
                                "config": {
                                    "code": {
                                        "title": "Код поля в API",
                                        "titleShort": "API:"
                                    },
                                    "edit": {
                                        "title": "Редактирование",
                                        "apiOnly": "Только через API",
                                        "visibleRules": "Заданы условия видимости"
                                    }
                                },
                                "object": {
                                    "namePlaceholder": "выбрать каталог или вид",
                                    "fieldsPlaceholder": "дополнительно отображаемые поля"
                                },
                                "list": {
                                    "item": {
                                        "remove": "Удалить значение"
                                    },
                                    "add": {
                                        "button": "Добавить",
                                        "placeholder": "+ добавить"
                                    },
                                    "emptyName": {
                                        "enterName": "Введите название"
                                    }
                                },
                                "remove": "Удалить поле",
                                "lastItemWhenCollapsed": "изменить"
                            },
                            "namePlaceholderHint": "Добавить подсказку к полю",
                            "fieldProperties": {
                                "tabs": {
                                    "properties": "Свойства",
                                    "visibility": "Видимость"
                                },
                                "noFieldSelected": "Выберите поле, чтобы задать свойства",
                                "generalProperties": {
                                    "section": "Общие свойства",
                                    "name": "Название поля",
                                    "hint": "Подсказка для заполнения",
                                    "required": "✱ Обязательное поле"
                                },
                                "technicalProperties": {
                                    "section": "Технические свойства",
                                    "id": {
                                        "label": "API-ключ",
                                        "noValue": "[появится после сохранения каталога]"
                                    },
                                    "history": {
                                        "label": "",
                                        "value": "◷ Сохранять изменения в истории"
                                    },
                                    "filterable": {
                                        "label": "",
                                        "value": "🔎︎ Показывать на панели фильтров"
                                    },
                                    "apiOnly": {
                                        "label": "",
                                        "value": "Редактируемое только через API"
                                    },
                                    "comment": "Служебная заметка"
                                },
                                "visibleProperties": {
                                    "section": "Условия видимости поля",
                                    "needSave": {
                                        "title": "Новые поля пока не доступны",
                                        "text": "Сохраните каталог, чтобы новые поля стали доступны для условий видимости."
                                    },
                                    "needSelectResource": {
                                        "title": "Выбор поля пока не доступен",
                                        "text": "Выберите связанный каталог, чтобы поля стали доступны для условий видимости."
                                    }
                                },
                                "configProperties": {
                                    "section": "Параметры",
                                    "field": {
                                        "text": {
                                            "type": {
                                                "label": "Тип поля",
                                                "items": {
                                                    "text": "Текст",
                                                    "masktext": "Текст по маске",
                                                    "multiline": "Многострочный текст"
                                                }
                                            },
                                            "mask": {
                                                "label": "Маска ввода",
                                                "hint": "Служебные символы для задания маски:\n1 — любое число\nA — любая заглавная буква\na — любая строчная буква\n* — любая буква или число\nЛюбые другие символы считаются частью шаблона значения. Пример: AA**-1111"
                                            }
                                        },
                                        "number": {
                                            "min": "Минимальное значение",
                                            "max": "Максимальное значение",
                                            "unit": "Единица измерения"
                                        },
                                        "date": {
                                            "time": "С временем",
                                            "defaultValue": {
                                                "label": "",
                                                "value": "По умолчанию: текущая дата"
                                            }
                                        },
                                        "contact": {
                                            "type": {
                                                "label": "Назначение",
                                                "items": {
                                                    "phone": "Телефон",
                                                    "email": "Электронная почта",
                                                    "site": "Сайт/ссылка"
                                                }
                                            }
                                        },
                                        "switch": {
                                            "defaultValue": {
                                                "label": "",
                                                "value": "По умолчанию: включен"
                                            }
                                        },
                                        "button": {
                                            "multiselect": {
                                                "label": "",
                                                "value": "Можно выбрать несколько кнопок"
                                            }
                                        },
                                        "address": {
                                            "token": {
                                                "label": "Токен сервиса Dadata.ru",
                                                "hint": "Поле адрес позволяет вводить адрес по номенклатурам КЛАДР и ФИАС. Список адресов получается со стороннего сервиса. Для доступа к сервису необходим ключ доступа — токен. Для получения токена зарегистрируйтесь на сайте dadata.ru"
                                            }
                                        },
                                        "dropdown": {
                                            "multiselect": {
                                                "label": "",
                                                "value": "Можно выбрать несколько значений"
                                            },
                                            "defaultValue": {
                                                "label": "",
                                                "value": "По умолчанию: первый элемент"
                                            }
                                        },
                                        "checkboxes": {
                                            "defaultValue": {
                                                "label": "",
                                                "value": "По умолчанию: первый элемент"
                                            }
                                        },
                                        "radiobutton": {
                                            "defaultValue": {
                                                "label": "",
                                                "value": "По умолчанию: первый элемент"
                                            }
                                        },
                                        "user": {
                                            "multiselect": {
                                                "label": "",
                                                "value": "Можно выбрать несколько сотрудников"
                                            },
                                            "defaultValue": {
                                                "label": "",
                                                "value": "По умолчанию: текущий сотрудник"
                                            },
                                            "subscribeAllChatMessages": {
                                                "label": "",
                                                "value": "Подписать на все сообщения в чате"
                                            }
                                        },
                                        "object": {
                                            "enableCreate": {
                                                "label": "",
                                                "value": "Можно создавать новые записи"
                                            },
                                            "enableSelect": {
                                                "label": "",
                                                "value": "Можно выбирать из существующих"
                                            },
                                            "multiselect": {
                                                "label": "",
                                                "value": "Можно связывать несколько записей"
                                            },
                                            "enableUnsaved": {
                                                "label": "",
                                                "value": "Создание без всплывающего окна"
                                            },
                                            "accessOnly": {
                                                "label": "",
                                                "value": "Выбирать только из доступных"
                                            }
                                        },
                                        "file": {
                                            "multiselect": {
                                                "label": "",
                                                "value": "Можно загрузить несколько файлов"
                                            }
                                        }
                                    }
                                }
                            },
                            "fields": {
                                "collapse": "Свернуть",
                                "expand": "Развернуть"
                            }
                        },
                        "fieldTypes": {
                            "group": {
                                "name": "Секция",
                                "namePlaceholder": "Название секции"
                            },
                            "text": {
                                "name": "Текст",
                                "namePlaceholder": "Название поля",
                                "types": {
                                    "text": "Текст",
                                    "masktext": "Текст по маске",
                                    "tel": "Телефон",
                                    "mail": "Электронная почта",
                                    "multiline": "Многострочный текст",
                                    "script": "Код (скрипт)"
                                },
                                "mask": {
                                    "placeholder": "Маска ввода",
                                    "example": "Пример: 111-111",
                                    "error": "Значение не соответствует формату",
                                    "incorrectMask": "Проверьте корректность маски:\n1 — любое число\nA — любая заглавная буква\na — любая строчная буква\n* — любая буква или число\nЛюбые другие символы считаются частью шаблона значения. Пример: AA**-1111"
                                }
                            },
                            "contact": {
                                "name": "Контакт",
                                "namePlaceholder": "Название поля",
                                "types": {
                                    "phone": "Телефон",
                                    "email": "Электронная почта",
                                    "site": "Сайт/ссылка"
                                },
                                "email": {
                                    "error": "Неверный формат адреса электронной почты"
                                }
                            },
                            "address": {
                                "name": "Адрес",
                                "namePlaceholder": "Название поля",
                                "token": {
                                    "name": "Токен сервиса Dadata.ru",
                                    "placeholder": "токен dadata.ru",
                                    "hint": "Для получения токена зарегистриуйтесь на сайте dadata.ru"
                                }
                            },
                            "number": {
                                "name": "Число",
                                "namePlaceholder": "Название поля",
                                "placeholder": "единица измерения",
                                "fromText": "От",
                                "toText": "До",
                                "min": {
                                    "placeholder": "От",
                                    "error": "Должно быть больше:"
                                },
                                "max": {
                                    "placeholder": "До",
                                    "error": "Должно быть меньше:"
                                },
                                "unit": {
                                    "placeholder": "Единица измерения"
                                }
                            },
                            "date": {
                                "name": "Дата",
                                "namePlaceholder": "Название поля",
                                "withTime": "С временем",
                                "withNotify": "Автоматически создавать напоминание сотрудникам, отмеченным в поле",
                                "fromText": "От",
                                "toText": "До",
                                "fromRelativeText": "± X дней",
                                "toRelativeText": "± X дней",
                                "default": "По умолчанию: текущая дата"
                            },
                            "time": {
                                "name": "Время"
                            },
                            "switch": {
                                "name": "Переключатель",
                                "namePlaceholder": "Название поля",
                                "default": "По умолчанию: включен"
                            },
                            "button": {
                                "name": "Кнопка",
                                "namePlaceholder": "Название поля"
                            },
                            "dropdown": {
                                "name": "Статус",
                                "namePlaceholder": "Название поля",
                                "namePlaceholderItem": "+ вариант",
                                "multiselect": "Можно выбрать несколько",
                                "AddInCatalog": "Добавить в",
                                "removedCatalog": "Каталог удалён",
                                "default": "По умолчанию: первый элемент"
                            },
                            "checkboxes": {
                                "name": "Набор галочек",
                                "namePlaceholder": "Назание поля",
                                "default": "По умолчанию: первый элемент"
                            },
                            "radiobutton": {
                                "name": "Выбор значения",
                                "namePlaceholder": "Назание поля",
                                "default": "По умолчанию: первый элемент"
                            },
                            "progress": {
                                "name": "Прогресс",
                                "namePlaceholder": "Название поле",
                                "fromText": "От",
                                "toText": "До"
                            },
                            "stars": {
                                "name": "Оценка звездами",
                                "namePlaceholder": "Название поле"
                            },
                            "user": {
                                "name": "Сотрудник",
                                "namePlaceholder": "Название поле",
                                "multiselect": "Можно выбрать несколько",
                                "multiselectHint": "Можно выбрать несколько сотрудников",
                                "default": "По умолчанию: текущий сотрудник",
                                "subscribeAllChatMessages": "Подписать на все сообщения в чате",
                                "abbreviatedSubscribeAllChatMessages": "Подписать на"
                            },
                            "object": {
                                "name": "Связанный каталог",
                                "namePlaceholder": "Название поля",
                                "item": {
                                    "label": "Выпадающий список с записями из другого каталога:",
                                    "sourceLabel": "Каталог:",
                                    "sourcePlaceholder": "Выберите источник",
                                    "fieldsLabel": "Поля:",
                                    "fieldsPlaceholder": "без расширенных полей",
                                    "filterLabel": "Фильтр:",
                                    "filterPlaceholder": "доступные значения зависят от другого поля каталога",
                                    "filterNeedSave": "Требуется сначала сохранить каталог",
                                    "filterHelp": "Фильтровать записи в выпадающем списке в зависимости от значения в поле карточки",
                                    "rightsLabel": "Доступ:",
                                    "previewLabel": "Пример:",
                                    "previewRecordTitle": "Название выбранной записи",
                                    "cannotChanged": "Все каталоги"
                                },
                                "mode": {
                                    "label": "Вид",
                                    "table": "Таблица",
                                    "list": "Список",
                                    "cards": "Карточки"
                                },
                                "addSource": "+ Добавить еще один связанный каталог",
                                "multiselect": "Можно связывать несколько записей",
                                "accessOnly": "Выбирать только из доступных",
                                "enableCreate": "Можно создавать новые записи в связанном каталоге",
                                "enableSelect": "Можно выбирать из существующих записей",
                                "enableUnsaved": "Создание без всплывающего окна"
                            },
                            "file": {
                                "name": "Файл",
                                "namePlaceholder": "Название поля",
                                "multiselect": "Можно загрузить несколько файлов",
                                "multiselectHint": "Можно загрузить несколько файлов"
                            }
                        },
                        "isRequired": "Обязательное поле",
                        "dropdown": {
                            "noitems": "<Пусто>",
                            "loading": "Загрузка..."
                        },
                        "modals": {
                            "icons": {
                                "groupName": {
                                    "arrows": "Стрелки",
                                    "business": "Бизнес",
                                    "communication": "Коммуникации",
                                    "content": "Контент",
                                    "design": "Рисование",
                                    "edition": "Редактирование",
                                    "files": "Файлы",
                                    "food": "Еда",
                                    "hardware": "Оборудование",
                                    "health": "Здоровье",
                                    "interface": "Интерфейс",
                                    "keyboard": "Клавиатура",
                                    "leisure": "Отдых",
                                    "multimedia": "Мультимедиа",
                                    "objects": "Объекты",
                                    "places": "Места",
                                    "programing": "Программирование",
                                    "setting": "Настройки",
                                    "social": "Соцсети",
                                    "status": "Статусы",
                                    "text": "Текст",
                                    "time": "Время",
                                    "transfers": "Перемещение",
                                    "transportation": "Транспорт",
                                    "users": "Люди",
                                    "vote": "Голосование",
                                    "weather": "Погода"
                                }
                            },
                            "removeDashboard": {
                                "text": "Все данные этого дашборда будут удалены.",
                                "header": "Удалить дашборд?",
                                "okText": "Удалить",
                                "cancelText": "Отмена"
                            },
                            "removeIcon": {
                                "remove": "Убрать иконку"
                            },
                            "renameDashboard": {
                                "header": "Переименовать дашборд?",
                                "okText": "Сохранить",
                                "cancelText": "Отмена"
                            },
                            "removeRecordConfirm": {
                                "text": "Все данные этой записи будут также удалены.",
                                "header": "Удалить запись?",
                                "okText": "Удалить запись",
                                "cancelText": "Отмена"
                            },
                            "removeYourselfConfirm": {
                                "text": "Удалив себя из системы, вы потеряете к ней доступ.",
                                "header": "Вы удаляете себя из системы",
                                "okText": "Удалить",
                                "cancelText": "Отмена"
                            },
                            "changeYourselfConfirm": {
                                "text": "Изменив свой логин в системе, вы потеряете к ней доступ по предыдущему логину. Указав в виде логина эл. почту, вам придет повторное приглашение в систему, в противном случае не забудьте указать первичный пароль для входа, иначе вы потеряете доступ в систему.",
                                "header": "Вы изменяете свой логин в системе",
                                "okText": "Изменить",
                                "cancelText": "Отменить"
                            },
                            "createDashboard": {
                                "okText": "Создать",
                                "cancelText": "Отмена",
                                "placeHolder": "Название дашборда",
                                "header": "Создание дашборда",
                                "warning": "Созданный дашборд будет доступен только в текущем виде",
                                "advice": "Чтобы создать дашборд доступный во всех видах, создайте его в общем виде каталога."
                            },
                            "removeWidget": {
                                "header": "Удалить график?",
                                "text": "График будет удалён безвозвратно.",
                                "okText": "Удалить",
                                "cancelText": "Отмена"
                            },
                            "removeFieldConfirm": {
                                "text": "Все данные этого поля будут также удалены",
                                "header": "Удалить поле?",
                                "okText": "Удалить поле и данные",
                                "cancelText": "Отмена"
                            },
                            "removeFieldTabConfirm": {
                                "text": "Все поля этой вкладки будут перенесены в предыдущую вкладку",
                                "header": "Удалить вкладку?",
                                "okText": "Удалить вкладку",
                                "cancelText": "Отмена"
                            },
                            "removeDropdownItemConfirm": {
                                "text": "Это значение будет удалено из всех записей каталога",
                                "header": "Удалить значение?",
                                "okText": "Удалить значение и данные",
                                "cancelText": "Отмена"
                            },
                            "removeConfirm": {
                                "firstText": "Каталог и все его данные будут удалены.",
                                "secondText": "Для подтверждения удаления впишите его название в поле:",
                                "headerText": "Удалить каталог?",
                                "okText": "Удалить каталог и данные",
                                "cancelText": "Отмена"
                            },
                            "truncateConfirm": {
                                "firstText": "Все записи в каталоге будут удалены, включая историю, файлы и связи с другими записями. Нумерация в каталоге начнется сначала. Удаление в больших каталогах может занять несколько минут.",
                                "secondText": "Для подтверждения удаления записей впишите название каталога в поле:",
                                "headerText": "Очистить каталог?",
                                "okText": "Удалить все записи",
                                "cancelText": "Отмена"
                            },
                            "removeSectionConfirm": {
                                "firstText": "Отдел и все его каталоги будут удалены.",
                                "secondText": "Для подтверждения удаления впишите его название в поле:",
                                "headerText": "Удалить отдел?",
                                "okText": "Удалить отдел",
                                "cancelText": "Отмена"
                            },
                            "removeViewConfirm": {
                                "text": "Вид будет удален безвозвратно.",
                                "textForRights": "Вид будет удален безвозвратно. Сотрудники, которым он доступен, потеряют доступ до записей этого вида.",
                                "headerText": "Удалить вид?",
                                "okText": "Удалить",
                                "cancelText": "Отмена"
                            },
                            "removeTimeFromDateConfirm": {
                                "text": "Все даты будут сконвертированы с учетом вашего часового пояса. Для вас они останутся прежними, но для сотрудников в других часовых поясах могут сдвинутся. Продолжить?",
                                "headerText": "Конвертировать данные?",
                                "okText": "Конвертировать",
                                "cancelText": "Отмена"
                            },
                            "closeEditor": {
                                "text": "Вы изменили запись, но не сохранили её.<br />Если вы её закроете, изменения будут утеряны",
                                "textClear": "Все введенные данные будут утеряны",
                                "headerText": "Закрыть без сохранения?",
                                "headerTextClear": "Очистить форму?",
                                "okText": "Закрыть не сохраняя",
                                "okClear": "Очистить",
                                "cancelText": "Не закрывать",
                                "cancelClear": "Отменить"
                            },
                            "createSection": {
                                "headerText": "Создание отдела",
                                "inputPlaceHolder": "Название отдела"
                            },
                            "noCatalogName": {
                                "text": "Вы не задали имя каталога. Вы также можете выбрать и иконку.",
                                "headerText": "Задайти имя каталога",
                                "okText": "Задать"
                            },
                            "saveError": {
                                "text": "Что-то пошло не так.",
                                "headerText": "Ошибка сохранения каталога",
                                "okText": "Закрыть"
                            },
                            "moveCatalogError": {
                                "text": "Что-то пошло не так.",
                                "headerText": "Ошибка при перемещении каталога",
                                "okText": "Закрыть"
                            },
                            "recordSaveError": {
                                "text": "Что-то пошло не так.",
                                "headerText": "Ошибка сохранения записи",
                                "okText": "Закрыть"
                            },
                            "notImplemented": {
                                "text": "Все сотрудники имеют доступ до всей информации",
                                "headerText": "Ограничение доступа не реализовано",
                                "okText": "Закрыть"
                            },
                            "changeSectionName": {
                                "headerText": "Изменение названия отдела"
                            },
                            "createSectionError": {
                                "headerText": "Ошибка создания отдела",
                                "text": "Что-то пошло не так",
                                "okText": "Закрыть"
                            },
                            "createRecordError": {
                                "headerText": "Ошибка создания записи",
                                "text": "Что-то пошло не так",
                                "okText": "Закрыть"
                            },
                            "deleteRecordError": {
                                "headerText": "Ошибка удаления записи",
                                "text": "Что-то пошло не так",
                                "okText": "Закрыть"
                            },
                            "loadRecordError": {
                                "headerText": "Ошибка открытия записи",
                                "text": "Что-то пошло не так",
                                "okText": "Закрыть"
                            },
                            "schemaLock": {
                                "text": "В лицензии вашей компании нет права на изменение структуры каталогов. Возможно это временное ограничение, связанное с техническими работами.\n\nДля получения лицензии на право изменения структуры обратитесь к разработчикам системы.",
                                "headerText": "Изменение структуры запрещено",
                                "okText": "Закрыть"
                            },
                            "fieldRights": {
                                "header": "Право редактировать поля",
                                "stuffs": "Сотрудники компании",
                                "loading": "Обновление..."
                            },
                            "denied": {
                                "headerText": "Нет доступа",
                                "text": "У вас нет прав для совершения операции",
                                "okText": "Закрыть",
                                "record": {
                                    "create": {
                                        "headerText": "Нет доступа",
                                        "text": "У вас нет прав для создания записи"
                                    },
                                    "update": {
                                        "headerText": "Нет доступа",
                                        "text": "У вас нет прав для изменения записи"
                                    },
                                    "read": {
                                        "headerText": "Нет доступа",
                                        "text": "У вас нет прав для просмотра информации"
                                    },
                                    "delete": {
                                        "headerText": "Нет доступа",
                                        "text": "У вас нет прав для удаления записи"
                                    }
                                }
                            },
                            "notFound": {
                                "okText": "Закрыть",
                                "record": {
                                    "headerText": "Запись не найдена",
                                    "text": "Запись не существует или у вас нет прав на ее просмотр"
                                },
                                "catalog": {
                                    "headerText": "Каталог не найден",
                                    "text": "Каталог не существует или у вас нет прав на его просмотр"
                                }
                            },
                            "access": {
                                "header": "Общий доступ",
                                "stuffs": "Сотрудники компании",
                                "loading": "Обновление...",
                                "selectSubject": "Добавить сотрудника/группу",
                                "from": "от",
                                "inheritedFromSection": "Наследуется от отдела",
                                "inheritedFromCatalog": "Наследуется от каталога",
                                "errors": {
                                    "adminPrivilegeRequired": "Необходимо дать право «Администрировать» хотя бы одному сотруднику."
                                },
                                "exception": {
                                    "hide": "Скрыто",
                                    "view": "Видеть",
                                    "edit": "Изменять"
                                },
                                "byFields": "Права на поля",
                                "privilege": "Привилегия",
                                "privileges": {
                                    "section": {
                                        "deny": "Запретить доступ",
                                        "admin": "Администрировать",
                                        "access": "Назначать права",
                                        "delete": "Удалять записи",
                                        "export": "Экспорт записей",
                                        "create": "Создавать записи",
                                        "edit": "Изменять все записи",
                                        "view": "Видеть все записи",
                                        "search": "Видеть отдел в меню",
                                        "available": "Доступ к разрешенным"
                                    },
                                    "catalog": {
                                        "deny": "Запретить доступ",
                                        "admin": "Администрировать",
                                        "access": "Назначать права",
                                        "delete": "Удалять записи",
                                        "export": "Экспорт записей",
                                        "create": "Создавать записи",
                                        "edit": "Изменять все записи",
                                        "view": "Видеть все записи",
                                        "search": "Видеть каталог в меню",
                                        "available": "Доступ к разрешенным"
                                    },
                                    "view": {
                                        "deny": "Запретить доступ",
                                        "admin": "Администрировать",
                                        "access": "Назначать права",
                                        "delete": "Удалять записи",
                                        "export": "Экспорт записей",
                                        "create": "Создавать записи",
                                        "edit": "Изменять записи",
                                        "view": "Видеть записи",
                                        "search": "Видеть вид в меню",
                                        "available": "Доступ к разрешенным"
                                    },
                                    "record": {
                                        "deny": "Запретить доступ",
                                        "admin": "Администрировать",
                                        "access": "Назначать права",
                                        "delete": "Удалять запись",
                                        "export": "Экспорт записи",
                                        "create": "Создавать запись",
                                        "edit": "Изменять запись",
                                        "view": "Видеть запись",
                                        "search": "Видеть в меню"
                                    }
                                },
                                "publicAccess": {
                                    "catalogHeader": "Веб-форма добавления записей",
                                    "catalogModal": "Веб-форма просмотра каталога",
                                    "recordHeader": "Веб-форма редактирования записи"
                                },
                                "headerSuffix": {
                                    "section": " к отделу",
                                    "catalog": " к каталогу",
                                    "view": " к виду",
                                    "record": " к записи"
                                }
                            },
                            "createNewView": {
                                "headerText": "Создание вида"
                            },
                            "editNewView": {
                                "headerText": "Изменить вид"
                            },
                            "save": "Сохранить",
                            "cancel": "Отменить",
                            "close": "Закрыть",
                            "thx": "Спасибо",
                            "helpHeader": "Как работать с системой",
                            "record": {
                                "success": {
                                    "title": "Информация",
                                    "okText": "Закрыть"
                                },
                                "changes": {
                                    "title": "Информация",
                                    "errorText": "Что-то пошло не так",
                                    "okText": "Закрыть"
                                }
                            }
                        },
                        "record": {
                            "open": "Открыть",
                            "openModal": "Открыть в отдельной карточке",
                            "newRecord": "Заполните поля",
                            "newRecordCreated": "Сохранено",
                            "newRecordCreating": "Новая запись",
                            "emptyRecordName": "<Пусто>",
                            "tabs": {
                                "main": "Анкета",
                                "links": "Связи",
                                "history": "История",
                                "chat": "Чат"
                            },
                            "groupFields": {
                                "count_zero": "{{count}} полей",
                                "count_one": "{{count}} поле",
                                "count_two": "{{count}} поля",
                                "count_few": "{{count}} поля",
                                "count_many": "{{count}} полей",
                                "count_other": "{{count}} полей"
                            },
                            "groupRecords": {
                                "count_zero": "{{count}} записей",
                                "count_one": "{{count}} запись",
                                "count_two": "{{count}} записи",
                                "count_few": "{{count}} записи",
                                "count_many": "{{count}} записей",
                                "count_other": "{{count}} записей"
                            },
                            "users": {
                                "count_zero": "{{count}} сотрудников",
                                "count_one": "{{count}} сотрудник",
                                "count_two": "{{count}} сотрудника",
                                "count_few": "{{count}} сотрудников",
                                "count_many": "{{count}} сотрудников",
                                "count_other": "{{count}} сотрудников"
                            },
                            "values": {
                                "count_zero": "{{count}} значений",
                                "count_one": "{{count}} значение",
                                "count_two": "{{count}} значения",
                                "count_few": "{{count}} значения",
                                "count_many": "{{count}} значений",
                                "count_other": "{{count}} значений"
                            },
                            "fields": {
                                "text": {
                                    "status": {
                                        "readyToSend": "Применить"
                                    }
                                },
                                "file": {
                                    "size": "Мб",
                                    "remove": "Удалить файл",
                                    "upload": "Загрузить...",
                                    "attach": "Прикрепить...",
                                    "drop": "или перетащите файл",
                                    "download": "Скачать",
                                    "create": "Создать"
                                },
                                "user": {
                                    "addUser": "Выбрать..."
                                },
                                "object": {
                                    "add": "Выбрать...",
                                    "open": "Открыть карточку",
                                    "delete": "Удалить связь",
                                    "restore": "Восстановить"
                                },
                                "contact": {
                                    "add": "Добавить",
                                    "removed": "Удалено.",
                                    "restore": "Восстановить",
                                    "mailTo": "Написать",
                                    "open": "Открыть",
                                    "commentPlaceHolder": "описание",
                                    "removeBtnTitle": "Удалить контакт"
                                },
                                "date": {
                                    "now": "сейчас"
                                },
                                "code": {
                                    "open": "Открыть во весь экран",
                                    "editorTitle": "Редактор"
                                }
                            },
                            "linkedData": {
                                "loadMore": "+ Загрузить ещё",
                                "create": "Создать",
                                "openCatalog": "Открыть",
                                "noData": "Связанных данных нет",
                                "linkedCatalogOpen": "Раскрыть"
                            },
                            "attachFile": {
                                "headerTitle": "Прикрепить файл",
                                "enterUrl": "Введен некоректный URL-адрес",
                                "requiredParam": "обязательно",
                                "title": "Название файла",
                                "fileType": "Тип файла",
                                "url": "Ссылка",
                                "search": "Поиск",
                                "categories": {
                                    "documents": "Документы",
                                    "images": "Изображения",
                                    "audioFiles": "Аудио-файлы",
                                    "videoFiles": "Видео-файлы",
                                    "drawings": "Чертежи",
                                    "bpmn": "Бизнес-процессы",
                                    "default": "Иной формат"
                                }
                            },
                            "actions": {
                                "save": "Сохранить",
                                "saving": "Сохранение...",
                                "saveError": "Ошибка сохранения",
                                "cancel": "Отмена",
                                "attach": "Прикрепить...",
                                "toAttach": "Прикрепить",
                                "close": "Закрыть"
                            },
                            "history": {
                                "title": "История",
                                "empty": "Нет записей",
                                "sendComment": "Написать",
                                "commentPlaceholder": "Написать комментарий...",
                                "unknown": "Неизвестно",
                                "type": {
                                    "create": "Запись создана",
                                    "delete": "Запись удалена"
                                },
                                "fieldName": "Комментарий"
                            },
                            "chat": {
                                "title": "Комментарии",
                                "hideComments": "Скрыть комментарии",
                                "disabledComments": "Комментарии можно писать после создания записи",
                                "subscribe": {
                                    "notifications": "Следить"
                                },
                                "sendMessage": {
                                    "placeholder": "Написать комментарий",
                                    "enter": "Отправить",
                                    "mention": {
                                        "currentRecord": "Текущая запись"
                                    },
                                    "resend": {
                                        "create": {
                                            "repeat": "Отправить повторно",
                                            "cancel": "Отменить отправку"
                                        },
                                        "edit": {
                                            "repeat": "Сохранить изменения повторно",
                                            "cancel": "Отменить изменение"
                                        },
                                        "delete": {
                                            "repeat": "Удалить повторно",
                                            "cancel": "Отменить удаление"
                                        }
                                    }
                                },
                                "editMessage": {
                                    "header": "Редактирование"
                                },
                                "message": {
                                    "authorSystem": "Система",
                                    "remove": "Удалить",
                                    "messageDeleted": "Сообщение удалено",
                                    "edit": "Редактировать",
                                    "reply": "Ответить",
                                    "copy": "Скопировать",
                                    "attachments": {
                                        "count_zero": "файлов",
                                        "count_one": "файл",
                                        "count_two": "файла",
                                        "count_few": "файлов",
                                        "count_many": "файлов",
                                        "count_other": "файлов"
                                    },
                                    "unreadMessage": "Непрочитанные сообщения",
                                    "edited": "изменено",
                                    "emptyChats": "Сообщений нет, напишите первым..."
                                }
                            },
                            "copyrightPrefix": "Форма создана в ",
                            "addBtn": "Добавить",
                            "filter": {
                                "name": "Видимость полей",
                                "show": "Показать всё",
                                "hide": "Скрыть всё",
                                "removeTitle": "Все фильтры будут сброшенны"
                            },
                            "webform": {
                                "success": {
                                    "message": "Форма отправлена",
                                    "action": "Отправить новую форму"
                                }
                            }
                        },
                        "rights": {
                            "header": "Правовой вид",
                            "access": "Доступ",
                            "description": "Сотрудники с доступом к виду увидят записи, попадающие под фильтр. По умолчанию применяются права на вид. Сотрудники с правом изменять и выше смогут редактировать записи. С правом видеть — только просматривать. Эти права могут быть ограничены или расширены правилами на поля.",
                            "byField": "Расширенные правила редактирования полей",
                            "originName": "Название для администраторов",
                            "name": "Название для сотрудников",
                            "save": "Сохранить и дать доступ к виду",
                            "hide": "скрыто",
                            "view": "видеть",
                            "edit": "изменять",
                            "hint": "Документация"
                        },
                        "batchUpdateRecords": {
                            "title": "Изменить ",
                            "valueActions": {
                                "set": "Задать",
                                "exclude": "Исключить",
                                "add": "Добавить"
                            },
                            "buttons": {
                                "loading": "Загрузка ",
                                "update": "Изменить ",
                                "pause": "Остановить",
                                "resume": "Продолжить"
                            },
                            "tabs": {
                                "main": "Анкета",
                                "result": "Результат"
                            },
                            "form": {
                                "fields": {
                                    "placeholder": "Задать значение",
                                    "notChange": "Массово изменить невозможно"
                                }
                            },
                            "result": {
                                "description": {
                                    "header": "Отчет",
                                    "modified": "Изменено ",
                                    "waitingTime": "Осталось "
                                },
                                "errors": {
                                    "header": "Ошибки "
                                }
                            },
                            "confirmation": {
                                "headerText": "Подтвердите действие",
                                "text": "Вы действительно хотите изменить ",
                                "okText": "Подтвердить"
                            },
                            "recordsListTitle": "Изменить {{count}} из {{catalogName}}"
                        },
                        "batchDeleteRecords": {
                            "title": "Удалить ",
                            "buttons": {
                                "loading": "Загрузка ",
                                "delete": "Удалить ",
                                "pause": "Пауза",
                                "resume": "Возобновить удаление"
                            },
                            "result": {
                                "description": {
                                    "deleted": "Удалено "
                                }
                            },
                            "confirmation": {
                                "headerText": "Удалить записи?",
                                "text": "Вы действительно хотите удалить ",
                                "okText": "Удалить записи",
                                "cancelText": "Отмена"
                            },
                            "notFoundRecords": "Выберите записи которые хотите удалить",
                            "recordsListTitle": "Удалить {{count}} из {{catalogName}}"
                        },
                        "import": {
                            "header": "Импорт из Excel",
                            "file": {
                                "uploadTypes": "XLS, XLSX, CSV",
                                "uploadInfo": "Перетащите файл в эту область",
                                "uploadOr": "или",
                                "uploadButton": "Загрузить файл",
                                "uploadCancel": "Отмена",
                                "uploadError": "Ошибка загрузки файла",
                                "uploadRetry": "Попробовать еще раз"
                            },
                            "progress": {
                                "indicator": {
                                    "imported": "Импортировано: ",
                                    "failed": "С ошибкой: ",
                                    "parsedRecords": "Определено: ",
                                    "parsedColumns": "Определено колонок: ",
                                    "all": "Строк: "
                                },
                                "timer": {
                                    "waitingTime": "Осталось"
                                }
                            },
                            "fields": {
                                "notSelected": "Не импортировать"
                            },
                            "errors": {
                                "record": {
                                    "delete": "Ошибка удаления записи",
                                    "create": "Ошибка импортирования записи"
                                },
                                "fields": {
                                    "notSelected": "Правила сопоставления полей отсутствуют"
                                }
                            },
                            "closeEditor": {
                                "headerText": "Завершить импорт?",
                                "text": "Импорт не завершен. Если закрыть окно, установленные правила сопоставления полей будут утеряны.",
                                "okText": "Закрыть",
                                "cancelText": "Не закрывать"
                            },
                            "buttons": {
                                "importStop": "Пауза",
                                "importResume": "Продолжить",
                                "importStart": "Импортировать"
                            },
                            "key": {
                                "close": "Закрыть",
                                "importing": "Импортирование записей...",
                                "loading": "Загрузка..."
                            },
                            "statusField": {
                                "name": "Cтатус строки",
                                "items": {
                                    "parsed": "Определено",
                                    "failedToParse": "Ошибка определения",
                                    "imported": "Импортировано",
                                    "failedToImport": "Ошибка импорта",
                                    "doNotImport": "Не импортировать",
                                    "inProcess": "Обработка"
                                }
                            }
                        },
                        "filter": {
                            "header": "Фильтр",
                            "titles": {
                                "interval": {
                                    "current": "Текущий период",
                                    "past": "Прошлый период",
                                    "future": "Будущий период"
                                }
                            },
                            "keys": {
                                "fixed": "Период дат",
                                "relative": "Период относительно сегодня",
                                "NULL_DATE": "Не задана",
                                "CURRENT_USER": "[Сотрудники.Я]",
                                "$EMPTY": "[Не задано]",
                                "$HAS": "[Задано]",
                                "has_from": "Задано из",
                                "TODAY_DATE": "Сегодня",
                                "TILL_TODAY_DATE": "Сегодня и ранее",
                                "THIS_WEEK_DATE": "Эта неделя",
                                "CURRENT_MONTH_DATE": "Этот месяц",
                                "THIS_YEAR_DATE": "Этот год",
                                "YESTERDAY_DATE": "Вчера",
                                "TILL_YESTERDAY_DATE": "Вчера и ранее",
                                "LAST_WEEK_DATE": "Прошлая неделя",
                                "LAST_30_DAYS_DATE": "Последние 30 дней",
                                "LAST_MONTH_DATE": "Прошлый месяц",
                                "LAST_365_DAYS_DATE": "Последние 365 дней",
                                "LAST_YEAR_DATE": "Прошлый год",
                                "CURRENT_DAY_DATE": "Этот день года",
                                "TOMORROW_DATE": "Завтра",
                                "TOMORROW_NEXT_DATE": "Завтра и далее",
                                "THIS_WEEK_TILL_TODAY_DATE": "Эта неделя (до сегодня)",
                                "THIS_WEEK_NEXT_TODAY_DATE": "Эта неделя (далее)",
                                "NEXT_WEEK_DATE": "Следующая неделя",
                                "NEXT_30_DAYS_DATE": "Следующие 30 дней",
                                "NEXT_MONTH_DATE": "Следующий месяц",
                                "NEXT_365_DAYS_DATE": "Следующие 365 дней",
                                "NEXT_YEAR_DATE": "Следующий год",
                                "$TRUE": "Да",
                                "$FALSE": "Нет"
                            },
                            "field": {
                                "removed": "[Удалено]"
                            },
                            "close": "Отменить фильтр",
                            "undefined": "[Не задано]"
                        },
                        "views": {
                            "list": {
                                "all": "Все",
                                "showRightViews": "Показать правовые виды"
                            },
                            "header": "виды",
                            "filters": "Фильтры",
                            "newView": "Новый вид",
                            "newPrivateView": "Сохранить как личный вид",
                            "renameView": "Переименовать",
                            "deleteView": "Удалить вид",
                            "modal": {
                                "headerTextSub": "Сохранённый набор фильтров для быстрого поиска записей",
                                "inputPlaceholder": "Название вида",
                                "labelForType": "Тип:",
                                "labelForRigthsView": "<b>Правовой:</b> дает доступ к выбранным записям другим сотрудникам",
                                "labelForPrivateView": "<b>Личный:</b> виден только вам",
                                "labelNameHint": "(если не задано, вид не будет отображаться для сотрудников)",
                                "saveViewAndSaveAccess": "Сохранить и задать права",
                                "createViewAndSaveAccess": "Создать и задать права"
                            }
                        },
                        "audioPlayer": {
                            "error": "Ошибка",
                            "download": "Скачать"
                        },
                        "multiModal": {
                            "open": "Открыть мультимодальное окно",
                            "close": "Закрыть мультимодальное окно",
                            "hideRecord": "Скрыть запись",
                            "catalog": "Каталог: ",
                            "record": " запись",
                            "records": " записи",
                            "manyRecords": " записей",
                            "alert": {
                                "title": "В мультимодальном окне нет записей.",
                                "text": "Добавьте какую-лиюо запись.",
                                "ok": "Ок"
                            }
                        },
                        "tab": {
                            "records": "Записи",
                            "activity": "Активность",
                            "history": "История",
                            "reports": "Отчеты"
                        },
                        "records": {
                            "cards": {
                                "config": {
                                    "axisX": {
                                        "label": "Разложить по горизонтали:"
                                    },
                                    "axisY": {
                                        "label": "Разложить по вертикали:"
                                    },
                                    "color": {
                                        "label": "Подкрасить цветом:"
                                    },
                                    "sort": {
                                        "label": "Сортировать по:"
                                    },
                                    "sortDirection": {
                                        "values": {
                                            "1": "по возрастанию",
                                            "-1": "по убыванию"
                                        },
                                        "asc": "по возрастанию",
                                        "desc": "по убыванию"
                                    },
                                    "nothing": " "
                                },
                                "axis": {
                                    "types": {
                                        "nothing": "Без разложения",
                                        "hour": "час",
                                        "hourOfDay": "час дня",
                                        "day": "день",
                                        "dayOfWeek": "день недели",
                                        "weekOfYear": "неделя года",
                                        "week": "неделя",
                                        "month": "месяц",
                                        "monthOfYear": "месяц года",
                                        "year": "год",
                                        "createdTime": "Дата создания",
                                        "id": "№ записи"
                                    }
                                }
                            }
                        },
                        "reports": {
                            "buttons": {
                                "addWidget": "Добавить график",
                                "fullScreen": {
                                    "close": "Свернуть",
                                    "open": "Во весь экран"
                                }
                            },
                            "boards": {
                                "forView": "Дашборд-вида",
                                "forCatalog": "Дашборд-каталога",
                                "remove": "Удалить дашборд",
                                "rename": "Переименовать",
                                "create": "Создать"
                            },
                            "widget": {
                                "modals": {
                                    "edit": {
                                        "title": "Настройка графика",
                                        "buttons": {
                                            "ok": "Сохранить"
                                        }
                                    },
                                    "create": {
                                        "title": "Создание графика",
                                        "buttons": {
                                            "ok": "Создать"
                                        }
                                    },
                                    "common": {
                                        "buttons": {
                                            "cancel": "Отменить",
                                            "remove": "Удалить"
                                        },
                                        "tabs": {
                                            "data": {
                                                "title": "Данные",
                                                "value": {
                                                    "label": "Посчитать",
                                                    "types": {
                                                        "recordsCount": "Количество записей",
                                                        "timeLeft": "продолжительность",
                                                        "timeBefore": "наступление",
                                                        "uniqueCount": "количество уникальных"
                                                    },
                                                    "functions": {
                                                        "sum": "сумма",
                                                        "max": "максимальное",
                                                        "min": "минимальное",
                                                        "avg": "среднее",
                                                        "avgAll": "среднее по всем"
                                                    }
                                                },
                                                "axis": {
                                                    "label": "Разложить по",
                                                    "types": {
                                                        "nothing": "Без разложения",
                                                        "hour": "час",
                                                        "hourOfDay": "час дня",
                                                        "day": "день",
                                                        "dayOfWeek": "день недели",
                                                        "weekOfYear": "неделя года",
                                                        "week": "неделя",
                                                        "month": "месяц",
                                                        "monthOfYear": "месяц года",
                                                        "year": "год",
                                                        "createdTime": "Дата создания"
                                                    },
                                                    "emptyValue": "[не задано]",
                                                    "multicolor": "Раскрасить значения"
                                                },
                                                "split": {
                                                    "label": "Разбить по",
                                                    "stacked": "Сложить значения"
                                                },
                                                "sort": {
                                                    "label": "Сортировать по",
                                                    "types": {
                                                        "axis": "Названию",
                                                        "value": "Значениям",
                                                        "asc": "По возрастанию",
                                                        "desc": "По убыванию"
                                                    }
                                                },
                                                "records": {
                                                    "label": "Учитывать",
                                                    "types": {
                                                        "all": "Все записи каталога",
                                                        "available": "Только доступные сотруднику записи"
                                                    }
                                                }
                                            },
                                            "filter": {
                                                "title": "Фильтр"
                                            }
                                        },
                                        "preview": {
                                            "demo": "Демонстрация",
                                            "type": "Вид",
                                            "namePlaceHolder": "Название графика",
                                            "types": {
                                                "lines": "Линия",
                                                "columns": "Столбцы",
                                                "bars": "Список",
                                                "pie": "Пирог",
                                                "radar": "Радар",
                                                "number": "Число",
                                                "table": "Таблица"
                                            }
                                        },
                                        "totals": {
                                            "sum": "всего",
                                            "avg": "в среднем"
                                        }
                                    }
                                },
                                "common": {
                                    "messages": {
                                        "axisNotSet": "Ось не выбрана",
                                        "noData": "Нет данных",
                                        "error": "Ошибка получения данных",
                                        "noLicense": "Доступно в платной версии модуля «Отчеты»",
                                        "noLicenseToSave": "Сохранение доступно в платной версии модуля «Отчеты»"
                                    }
                                },
                                "buttons": {
                                    "expand": "Развернуть",
                                    "collapse": "Свернуть",
                                    "options": {
                                        "downloadWidget": "Скачать изображение",
                                        "toExcel": "Выгрузить в excel",
                                        "edit": "Настроить"
                                    }
                                },
                                "noName": "Без названия"
                            },
                            "shortDate": {
                                "years": "г",
                                "months": "м",
                                "days": "д",
                                "hours": "ч",
                                "minutes": "м",
                                "seconds": "с"
                            }
                        },
                        "calendar": {
                            "viewTabs": {
                                "today": "Сегодня",
                                "year": "Год",
                                "month": "Месяц",
                                "week": "Неделя",
                                "day": "День",
                                "allDay": "Весь день"
                            },
                            "config": {
                                "start": "Дата начала:",
                                "end": "Дата конца:",
                                "color": "Подкрасить цветом:",
                                "sortField": "Сортировать по:",
                                "layout": "Разложить по:",
                                "ascending": "по возрастанию",
                                "descending": "по убыванию",
                                "suggestRecords": "Записи без даты",
                                "groupingOptions": "Параметры группировки"
                            },
                            "month": {
                                "weekDays": {
                                    "0": "Воскресенье",
                                    "1": "Понедельник",
                                    "2": "Вторник",
                                    "3": "Среда",
                                    "4": "Четверг",
                                    "5": "Пятница",
                                    "6": "Суббота"
                                }
                            },
                            "week": {
                                "weekDays": {
                                    "0": " ВС",
                                    "1": " ПН",
                                    "2": " ВТ",
                                    "3": " СР",
                                    "4": " ЧТ",
                                    "5": " ПT",
                                    "6": " СБ"
                                },
                                "months": {
                                    "0": " января",
                                    "1": " февраля",
                                    "2": " марта",
                                    "3": " апреля",
                                    "4": " мая",
                                    "5": " июня",
                                    "6": " июля",
                                    "7": " августа",
                                    "8": " сентября",
                                    "9": " октября",
                                    "10": " ноября",
                                    "11": " декабря"
                                }
                            },
                            "suggestRecords": {
                                "header": "Без даты",
                                "loadMoreSuggestedRecords": "+ Загрузить ещё"
                            }
                        },
                        "message": {
                            "requiredFieldEmpty": "Обязательное поле не заполнено",
                            "fieldValueError": "Ошибка заполнения полей",
                            "createError": "Ошибка создания",
                            "saveError": "Ошибка сохранения"
                        },
                        "license": {
                            "records": {
                                "leftText": "Свободно записей: ",
                                "limitText": " из ",
                                "countText": "Создано: ",
                                "updateText": "Перерасчёт ежедневно"
                            }
                        },
                        "errors": {
                            "license": {
                                "records": "Превышено количество запсией в системе. Создавать новые запрещено. Расширьте лицензию.",
                                "catalogs": "Превышено количество разрешенных каталогов. Создавать записи в этом каталоге запрещено. Расширьте лицензию.",
                                "extUsersCatalogs": "Каталог не доступен для внешних пользователей. Расширьте лицензию."
                            }
                        },
                        "script": {
                            "common": {
                                "catalog": "Каталог",
                                "catalogId": "ID каталога",
                                "fileId": "ID файла",
                                "fieldId": "ID поля",
                                "fieldsId": "ID полей",
                                "recordId": "ID записи",
                                "script": "Сценарий",
                                "scriptId": "ID сценария",
                                "saveTo": "Сохранить в",
                                "saveAs": "Сохранить как",
                                "valuesFormat": "Формат значений",
                                "fieldsValue": "Значения полей",
                                "enterCatalog": "Указать каталог",
                                "fromList": "Из списка",
                                "fromVariables": "Через переменную",
                                "description": "Описание",
                                "title": "Название",
                                "general": "Общие свойства",
                                "fieldValue": "Поле = Значение",
                                "keyValue": "Ключ = Значение",
                                "fieldCondition": "Поле = Условие",
                                "json": "JSON-объект",
                                "valueFormat": "Формат значений",
                                "expression": "выражение",
                                "numberExpression": "номер / выражение",
                                "valueExpression": "значение / выражение",
                                "variableName": "имя переменной",
                                "variable": "переменная",
                                "result": "Результат",
                                "params": "Параметры",
                                "connectionString": "Строка подключения",
                                "yes": "Да",
                                "no": "Нет",
                                "field": "Поле",
                                "saveContent": "Сохранить содержимое в",
                                "saveUrl": "Сохранить URL файла в",
                                "data": "Данные",
                                "formatCatalog": "Файл из каталога",
                                "formatUrl": "URL к файлу",
                                "constant": "Константа"
                            },
                            "sidebar": {
                                "tabs": {
                                    "properties": "Свойства",
                                    "sandbox": "Песочница"
                                }
                            },
                            "controlls": {
                                "endEvent": {
                                    "title": "Конец процесса"
                                },
                                "startEvent": {
                                    "title": "Начало процесса"
                                },
                                "bpiumAdd": {
                                    "title": "Создать запись",
                                    "formatHint": "JSON объект в формате { \"ID-поля\": значение, ... }",
                                    "outputHint": "Значение: объект { id, catalogId, title, values }"
                                },
                                "exclusiveGateway": {
                                    "title": "Условие (шлюз «ИЛИ»)",
                                    "defaultEmptyValue": "Шлюз «ИЛИ»"
                                },
                                "parallelGateway": {
                                    "title": "Раздвоение (шлюз «И»)",
                                    "defaultEmptyValue": "Шлюз «И»"
                                },
                                "errorEventDefinition": {
                                    "title": "Ошибка",
                                    "errorIn": "Сообщение ошибки в",
                                    "errorCodeIn": "Код ошибки в"
                                },
                                "code": {
                                    "title": "Код (javascript)",
                                    "code": "Код",
                                    "sourceHint": "Код возвращает результат через return",
                                    "sourcePlaceholder": "javascript код",
                                    "inputVariables": "Входные переменные"
                                },
                                "setvar": {
                                    "title": "Назначение переменных",
                                    "variables": "Переменные"
                                },
                                "sequenceFlow": {
                                    "title": "Связь",
                                    "condition": "Условие"
                                },
                                "intermediateCatchEvent": {
                                    "title": "Таймер",
                                    "timeoutName": "Пауза",
                                    "timeout": "Таймаут",
                                    "timeoutHint": "В формате ISO 8601: PT[часов]H[минут]M[секунд]S.\nПример для 10 секунд: PT10S"
                                },
                                "sqlRequest": {
                                    "title": "SQL-запрос",
                                    "connection": "Подключение",
                                    "connectionType": "Тип базы данных",
                                    "connectionMethod": "Способ подключения",
                                    "serverAddress": "Адрес сервера",
                                    "database": "База данных",
                                    "login": "Логин",
                                    "password": "Пароль",
                                    "queryHint": "Формат: запрос с именными параметрами в формате :paramname (с двоеточием перед параметром)",
                                    "requestParams": "Параметры запроса",
                                    "outputHint": "Значение: массив объектов (строк) в формате [ { \"колонка\": \"значение\", ...}, ... ]",
                                    "response": "Ответ",
                                    "responseWait": "Ожидать ответа",
                                    "request": "Запрос",
                                    "param": "параметр"
                                },
                                "bpiumGetCatalog": {
                                    "title": "Структура каталога",
                                    "structure": "Получить структуру",
                                    "getStructure": "Получить структуру каталога",
                                    "fields": "Поля",
                                    "allFields": "Все поля",
                                    "setFields": "Заданные",
                                    "outputHint": "Значение: каталог в API-формате { {id, title, fields: {}, ...} }",
                                    "fieldsSpecifiedHint": "Значение: массив ID-полей\r\n[id, ...]"
                                },
                                "bpiumEdit": {
                                    "title": "Изменить запись",
                                    "outputPlaceholder": "Значение: объект { id, catalogId, title, values }",
                                    "valuesHint": "JSON объект в формате { \"ID-поля\": значение, ... }"
                                },
                                "runProcess": {
                                    "title": "Запуск процесса",
                                    "sync": "Синхронно",
                                    "async": "Асинхронно",
                                    "asyncHint": "Синхронно запущенные процессы возвращают результат, но ограничены временем исполнения в 60 секунд",
                                    "setScript": "Указать сценарий",
                                    "run": "Запустить",
                                    "runSubprocess": "Запуск подпроцесса",
                                    "inputParams": "Входные параметры",
                                    "param": "параметр",
                                    "runMode": "Тип запуска",
                                    "saveResponse": "Сохранить ответ в",
                                    "saveProcessId": "Сохранить ID процесса в",
                                    "outputResultHint": "Значение: объект в формате { \"выходной параметр\": значение, ... }"
                                },
                                "bpiumDelete": {
                                    "title": "Удалить запись"
                                },
                                "bpiumCalculate": {
                                    "title": "Подсчитать значение"
                                },
                                "parser": {
                                    "title": "Парсер",
                                    "find": "Найти",
                                    "data": "Данные",
                                    "searchMethod": "Метод поиска",
                                    "jqSelector": "JQuery-селектор",
                                    "searchString": "Поисковая строка",
                                    "attr": "Атрибут",
                                    "return": "Вернуть",
                                    "returnValue": "Возвращаемое значение",
                                    "firstElement": "Первый элемент",
                                    "lastElement": "Последний элемент",
                                    "allElements": "Все",
                                    "itemHtml": "HTML элемента",
                                    "itemText": "Текст элемента",
                                    "itemValue": "Значение элемента (val)",
                                    "item": "Элемент"
                                },
                                "bpiumGetRecord": {
                                    "title": "Получить запись",
                                    "outputHint": "Значение: запись в API-формате {id, title, values: {}, ...}",
                                    "fieldsSpecifiedHint": "Значение: массив полей в API-формате\r\n[id, {fieldId: id, fields: {catalogId: [id, ...], ...}}, ... ]",
                                    "get": "Получить",
                                    "fields": "Поля",
                                    "allFields": "Все поля",
                                    "setFields": "Заданные"
                                },
                                "bpiumSendMessage": {
                                    "title": "Отправить сообщение",
                                    "messageText": "Текст",
                                    "messageTextHint": "Для того чтобы упомянуть сотрудника в тексте, необходимо вставить в текст маску ввода: <@__ID сотрудника__;Имя сотрудника/@>. \n Пример текста с упоминанием: '<@__1__;Иван/@> привет!'",
                                    "attachments": "Вложения",
                                    "attachmentsHint": "Формат: [ { title: \"...\", url: \"https://...\" }, ... ].",
                                    "outputHint": "",
                                    "messageLocation": "Написать сообщение к записи",
                                    "messageGroup": "Сообщение",
                                    "replyMessageId": "Ответом на",
                                    "replyMessageIdHint": "ID сообщения, на которое нужно ответить.",
                                    "mentions": "Упомянуть",
                                    "mentionsHint": "ID каталога и ID записи, которую нужно упомянуть. Чтобы упомянуть сотрудника, необходимо задать подобное значение: [ {catalogId: '$users', recordId: '1'}, ...] \nФормат произвольной записи: [ {catalogId: 1, recordId: 1}, ...].",
                                    "author": "Автор",
                                    "authorHint": "ID сотрудника из каталога сотрудников.",
                                    "fieldsSpecifiedHint": "",
                                    "allFields": "Все поля",
                                    "setFields": "Заданные"
                                },
                                "webRequest": {
                                    "title": "Веб-запрос",
                                    "response": "Ответ",
                                    "responseWait": "Ожидать ответа",
                                    "request": "Запрос",
                                    "method": "Метод",
                                    "params": "Запрос (параметры)",
                                    "paramsPlaceholder": "параметр",
                                    "body": "Запрос (body)",
                                    "headers": "Заголовки (headers)",
                                    "header": "заголовок",
                                    "query": "Адрес (URL)",
                                    "dataType": "Тип данных",
                                    "auth": "Авторизация",
                                    "authWithout": "Без авторизации",
                                    "authBasic": "Базовая авторизация",
                                    "login": "Логин",
                                    "password": "Пароль",
                                    "token": "Токен",
                                    "status": "Код HTTP-ответа в",
                                    "answerFormat": "Формат ответа",
                                    "binaryData": "Бинарные данные",
                                    "text": "Текст",
                                    "outputBody": "Ответ (body) в",
                                    "outputHeaders": "Заголовки (headers) в",
                                    "outputHeadersHint": "Значние: объект в формате {\"заголовок\": \"значение\"}",
                                    "requestFormat": "Формат запроса",
                                    "requestBody": "Тело запроса"
                                },
                                "getMail": {
                                    "title": "Получение почты",
                                    "flagTitle": "Категория писем",
                                    "flag": {
                                        "all": "Все",
                                        "answered": "Отвеченные",
                                        "draft": "Черновик",
                                        "deleted": "Удаленные",
                                        "new": "Новые",
                                        "recent": "Недавнее",
                                        "unseen": "Непрочитанные",
                                        "unflagged": "Без флага"
                                    },
                                    "searchCriteria": "Критерии поиска писем",
                                    "filterType": "Тип фильтра",
                                    "standart": "Стандартный",
                                    "custom": "Расширенный",
                                    "filters": "Пользовательские фильтры",
                                    "filtersHint": "Фильтры в формате: ['UNSEEN', ['FROM', 'June 2020']]",
                                    "sentAfter": "Дата писем от",
                                    "sentHint": "Дата в формате RFC или ISO. Например: 2005-08-09T18:31:42 ",
                                    "sentBefore": "Дата писем до",
                                    "rules": "Правила получения письма",
                                    "markSeen": "Отметить письмо прочитанным",
                                    "offset": "Порядковый номер",
                                    "offsetHint": "Порядковый номер письма для получения в найденных по поисковым критериям письмах. Первое письмо имеет порядковый номер 0 (по умолчанию).",
                                    "saveMessage": "Сохранить письмо в",
                                    "saveCount": "Сохранить количество найденных писем в",
                                    "attachments": "Вложения",
                                    "skip": "Не получать",
                                    "links": "Получить ссылки",
                                    "buffer": "Получить содержимое",
                                    "subject": "Тема",
                                    "subjectHint": "Поиск по вхождению строки",
                                    "sender": "Отправитель",
                                    "login": "Логин",
                                    "password": "Пароль",
                                    "token": "Токен для подключения",
                                    "host": "Адрес сервера",
                                    "port": "Порт",
                                    "protocol": "Протокол",
                                    "connection": "Подключение",
                                    "connectionType": "Способ подключения",
                                    "encryption": "Шифрование",
                                    "encrypted": "Использовать",
                                    "plain": "Не использовать",
                                    "encriptionselfsign": "Разрешать недоверенные сертификаты"
                                },
                                "convertDoc": {
                                    "title": "Конвертер",
                                    "dataSource": "Источник данных",
                                    "methodName": "Вариант конвертации",
                                    "methodHint": "На основе какого файла, и в какой файл будет происходить конвертация",
                                    "source": "Источник",
                                    "sourceCatalog": "Файл из записи",
                                    "sourceUrl": "URL к файлу",
                                    "templateData": "Данные для шаблона",
                                    "sourceContent": "Содержимое",
                                    "field": "Поле",
                                    "content": "Содержимое",
                                    "url": "URL файла",
                                    "urlHint": "URL к файлу",
                                    "jsonHint": "Объект с данными для подстановки в шаблон",
                                    "saveCatalog": "Файл в запись",
                                    "saveUrl": "URL в переменную",
                                    "saveContent": "Содержимое в переменную",
                                    "fieldHint": "Если в поле уже есть файл, то он будет замещен",
                                    "constant": "Константа",
                                    "fileName": "Имя файла",
                                    "fileHint": "Не забудьте расширение файла (docx, xlsx, ...)"
                                },
                                "sendMail": {
                                    "title": "Отправка почты",
                                    "message": "Письмо",
                                    "auth": "Авторизация",
                                    "subject": "Тема",
                                    "to": "Кому",
                                    "toHint": "Формат: эл.почта или несколько через запятую",
                                    "from": "От",
                                    "fromHint": "Формат: \"mail@mail.com\" или \"Имя <mail@mail.com>\"",
                                    "replyTo": "Ответить на",
                                    "replyToHint": "Адрес почты, который подставится, если в почтовой программе нажать «Ответить». Если не указан, будет использован адрес «От».\nФормат: \"mail@mail.com\" или \"Имя <mail@mail.com>\"",
                                    "inReplyTo": "Ответить на сообщение",
                                    "inReplyToHint": "ID письма, в ответ на которое будет отправлено сообщение",
                                    "includeProtocol": "Включая протокол",
                                    "text": "Текст",
                                    "saveMessage": "Вложения",
                                    "bcc": "Скрытая копия",
                                    "hiddenCopyHint": "Адрес почты, на который придет копия сообщения. \nФормат: \"first@mail.com, second@mail.com\"",
                                    "saveAttachments": "Формат: массив с объектами вида [ { title: \"...\", url: \"https://...\" }, ... ]. Для отправки файлов из карточки записи, передайте значение поля с файлами.",
                                    "saveAttachmentsHint": "Сохранить ID сообщения в",
                                    "format": "Формат",
                                    "formatText": "Простой текст (text/plain)"
                                },
                                "generateDoc": {
                                    "title": "Сгенерировать документ",
                                    "template": "Шаблон",
                                    "templatePath": "Путь к шаблону",
                                    "templateUrl": "URL шаблона",
                                    "templateHint": "URL к файлу шаблона в формате docx или xlsx",
                                    "jsonHint": "Объект с данными для подстановки в шаблон",
                                    "fieldIdHint": "Если в поле уже есть файл, то он будет замещен",
                                    "filename": "Имя файла",
                                    "filenameHint": "Не забудьте расширение файла (docx, xlsx)",
                                    "formatCatalog": "Файл в запись",
                                    "formatUrl": "URL в переменную"
                                },
                                "bpiumFindRecords": {
                                    "title": "Найти записи",
                                    "receive": "Получить",
                                    "view": "Вид",
                                    "filter": "Фильтр",
                                    "filterJsonHint": "JSON объект в формате { \"ID-поля\": условие, ... }",
                                    "fieldsSpecifiedHint": "Значение: массив полей в API-формате\r\n[id, {fieldId: id, fields: {catalogId: [id, ...], ...}}, ... ]",
                                    "limitHint": "API-параметр: limit. Максимум 1000 записей за раз",
                                    "recordsCount": "Количество записей",
                                    "outputHint": "Значение: массив записей в API-формате [ {id, title, values: {}, ...} ]",
                                    "outputCount": "Всего подходящих записей в каталоге",
                                    "outputCountHint": "Сколько всего записей в каталоге, удовлетворяющих условию",
                                    "sort": "Сортировать по",
                                    "offset": "Начиная с",
                                    "sortAsc": "По возрастанию",
                                    "sortDesc": "По убыванию",
                                    "fields": "Поля",
                                    "allFields": "Все поля",
                                    "specifiedFields": "Заданные"
                                },
                                "bpiumFileUpload": {
                                    "title": "Загрузить файл",
                                    "field": "Поле",
                                    "fieldIdHint": "Если в поле уже есть файл, то он будет замещен",
                                    "fileIdHint": "ID файла для последующего сохранения в поле записи",
                                    "file": "Файл",
                                    "fileUrl": "Загрузить по URL",
                                    "fileData": "Сгенерировать файл",
                                    "fileContent": "Содержание файла",
                                    "filename": "Имя файла",
                                    "filenameHint": "Имя файла для отображения в системе. Не забудьте расширение.",
                                    "formatCatalog": "Файл в запись",
                                    "formatId": "Вернуть ID файла"
                                }
                            },
                            "sandbox": {
                                "fields": {
                                    "sectionContext": {
                                        "name": "Контекст"
                                    },
                                    "processId": {
                                        "name": "Скопировать из процесса",
                                        "hint": "Скопировать в контекст входные значения из недавно запущенного процесса"
                                    },
                                    "context": {
                                        "name": "Объект с переменными",
                                        "hint": "Объект {var1, ...} с переменными, которые будут доступны внутри кода"
                                    },
                                    "sectionCode": {
                                        "name": "Проверка кода"
                                    },
                                    "source": {
                                        "name": "Код",
                                        "hint": "Исходный код, который будет исполнен с учетом котекста"
                                    },
                                    "result": {
                                        "name": "Результат",
                                        "hint": "Результат исполнения кода"
                                    }
                                }
                            }
                        },
                        "companies": {
                            "myCompanies": "Мои компании"
                        }
                    }
                }
            },
            "detection": {
                "lookupCookie": "lng",
                "lookupLocalStorage": "lng",
                "lookupSessionStorage": "lng",
                "caches": [
                    "cookie",
                    "localStorage"
                ],
                "order": [
                    "querystring",
                    "cookie",
                    "localStorage",
                    "sessionStorage",
                    "navigator",
                    "htmlTag"
                ],
                "lookupQuerystring": "lng",
                "excludeCacheFor": [
                    "cimode"
                ]
            },
            "ignoreJSONStructure": true
        },
        "store": {
            "ru": {
                "translation": {
                    "title": "Bpium",
                    "colors": {
                        "red": "Красный",
                        "orange": "Оранжевый",
                        "yellow": "Желтый",
                        "lemon": "Лимонный",
                        "scarlet": "Алый",
                        "white": "Белый",
                        "grey": "Серый",
                        "green": "Зеленый",
                        "violet": "Фиолетовый",
                        "blue": "Синий",
                        "lightBlue": "Голубой",
                        "mint": "Мятный"
                    },
                    "auth": {
                        "reenter": "Перезайти",
                        "username": "Электронная почта",
                        "passwordResetTitle": "Восстановление пароля",
                        "passwordReset": "Восстановить пароль",
                        "resetingPassword": "Восстановление пароля",
                        "resetPassword": "Восстановить пароль",
                        "fieldHintMessage": "Заполните это поле.",
                        "cancel": "Отмена",
                        "enter": "Вход",
                        "enterOtherUser": "Войти под другой учетной записью",
                        "login": "Войти",
                        "changeAddress": "Изменить адрес",
                        "logout": "Выйти",
                        "password": "Пароль",
                        "repeatPassword": "Пароль еще раз",
                        "create": "Создать",
                        "setPass": "Создание пароля",
                        "paymentRequired": "Доступ ограничен",
                        "toCompanyList": "Вернуться к списку компаний",
                        "errors": {
                            "tokenNotFound": "Токен не найден",
                            "specifyEmail": "Укажите адрес электронной почты",
                            "emailNotRegistered": "Почта не зарегистрирована",
                            "wrongCode": "Неверный код",
                            "minLength": "Пароль должен содержать минимум 6 символов",
                            "notEqual": "Пароли не совпадают",
                            "invalidCredentials": "Учетные данные неверны",
                            "somethingWrong": "Что-то пошло не так.",
                            "tooManyRequests": "Превышен лимит запросов к серверу"
                        },
                        "messages": {
                            "companyCreating": "Создается компания...",
                            "companyLimited": "Вы имеете доступ к компании {{company}}, но доступ по лицензии запрещен",
                            "instructionsSent": "Инструкция отправлена на {{email}}. Если вы не получили письмо, проверьте папку «Спам»."
                        },
                        "payment": {
                            "domainControls": "Доменом и лицензиями управляет",
                            "enterAs": "Вы авторизованы под учетной записью"
                        },
                        "activate": {
                            "users": {
                                "count_zero": "{{count}} сотрудников",
                                "count_one": "{{count}} сотрудник",
                                "count_two": "{{count}} сотрудника",
                                "count_few": "{{count}} сотрудника",
                                "count_many": "{{count}} сотрудников",
                                "count_other": "{{count}} сотрудника"
                            },
                            "extUsers": {
                                "count_zero": "{{count}} внешних сотрудников",
                                "count_one": "{{count}} внешних сотрудник",
                                "count_two": "{{count}} внешних сотрудника",
                                "count_few": "{{count}} внешних сотрудников",
                                "count_many": "{{count}} внешних сотрудников",
                                "count_other": "{{count}} внешних сотрудника"
                            },
                            "records": "Записей: ",
                            "catalogs": "Каталогов: ",
                            "unlimited": "бессрочно",
                            "active": "Активна до",
                            "notLimited": "Не ограничено",
                            "domainInUse": "Домен уже используется",
                            "invalidToken": "Token не валиден",
                            "title": "Активация лицензии",
                            "license": "Лицензия",
                            "code": "Активационный код",
                            "wrongCode": "Неверный код",
                            "getLicense": "Получите лицензию на",
                            "enterCode": "Введите код лицензии",
                            "activate": "Активировать"
                        },
                        "company": {
                            "companyCreate": "Создание компании",
                            "companyName": "Название компании",
                            "address": "Адрес компании в системе",
                            "adressHint": "английские буквы, цифры и дефис",
                            "phone": "Телефон",
                            "name": "Ваше имя"
                        }
                    },
                    "chats": {
                        "title": "Чаты",
                        "emptyChats": "Напишите сообщение в комментариях какой-либо записи, и оно появится здесь.",
                        "message": {
                            "titleAuthorIsMe": "Вы",
                            "unknownAuthorTitle": "Система"
                        }
                    },
                    "userMenu": {
                        "userInfo": {
                            "logout": "Выйти"
                        },
                        "background": {
                            "backgroundFromYou": "Фон для вас"
                        },
                        "license": {
                            "licenseTitle": "Лицензия",
                            "licenseEmpty": "Лицензия не найдена...",
                            "countRecords": "записей",
                            "licenseWorks": "Действует",
                            "remainedDate": {
                                "count_zero": "остался",
                                "count_one": "остался",
                                "count_two": "осталось",
                                "count_few": "осталось",
                                "count_many": "осталось",
                                "count_other": "осталось"
                            },
                            "remainedRecords": {
                                "count_zero": "осталось {{count}}",
                                "count_one": "осталась {{count}}",
                                "count_two": "осталось {{count}}",
                                "count_few": "осталось {{count}}",
                                "count_many": "осталось {{count}}",
                                "count_other": "осталось {{count}}"
                            },
                            "before": "До",
                            "toExtend": "Продлить на 3 месяца",
                            "buttons": {
                                "changeParams": "Изменить параметры",
                                "downloadInvoice": "Скачать счет",
                                "onlinePay": "Оплатить онлайн"
                            }
                        },
                        "feedback": {
                            "feedbackTitle": "Обратная связь",
                            "feedbackSuccess": "Запрос отправлен",
                            "feedbackError": "Ошибка отправки",
                            "phone": "Телефон",
                            "email": "Электронная почта",
                            "message": "Запрос из приложения: {{message}}.",
                            "buttons": {
                                "sendRequest": "Отправить запрос",
                                "repeat": "Повторить",
                                "cancel": "Отмена"
                            }
                        },
                        "helpers": {
                            "helpDocumentation": "Документация",
                            "helpQuestionToSales": "Задать вопрос"
                        }
                    },
                    "sidebar": {
                        "header": "Каталоги",
                        "newCatalog": "Новый каталог"
                    },
                    "menuPopover": {
                        "searchCatalog": "Найти каталог...",
                        "searchCompany": "Найти компанию...",
                        "addFavorite": "Добавить в избранное",
                        "removeFavorite": "Убрать из избранных",
                        "menu": "Меню",
                        "searchEmpty": "Каталоги не найдены",
                        "searchSideEmpty": "Ничего не найдено"
                    },
                    "buttons": {
                        "addTab": "Добавить новую вкладку",
                        "next": "Продолжить",
                        "displayParams": "Параметры отображения",
                        "cancel": "Отменить",
                        "save": "Сохранить",
                        "saveAs": "Сохранить как...",
                        "savePrivate": "Сохранить как личный вид",
                        "saving": "Сохранение...",
                        "access": "Доступ",
                        "accessSection": "Доступ к отделу",
                        "accessCatalog": "Доступ к каталогу",
                        "accessView": "Доступ к виду",
                        "refresh": "Обновить",
                        "filterNewMessages": "Показать записи с новыми сообщениями",
                        "filterAllRecords": "Показать все записи",
                        "remove": "Удалить",
                        "removeSection": "Удалить отдел",
                        "removeCatalog": "Удалить каталог",
                        "truncateCatalog": "Удалить все записи",
                        "removeView": "Удалить вид",
                        "removeRecord": "Удалить запись",
                        "edit": "Изменить",
                        "add": "Добавить",
                        "import": "Импорт из Excel",
                        "export": "Экспорт в Excel",
                        "rename": "Переименовать",
                        "renameSection": "Переименовать",
                        "changeIcon": "Изменить иконку",
                        "create": "Сохранить",
                        "createSection": "Отдел",
                        "configureSection": "Параметры отдела",
                        "creating": "Создание...",
                        "clear": "Очистить",
                        "configureCatalog": "Настроить поля",
                        "help": "Документация",
                        "clone": "Клонировать",
                        "download": "Скачать",
                        "exit": "Выйти",
                        "beta": "Бета",
                        "betaTitle": "находится в бета-тестировании",
                        "batchUpdateRecords": "Изменить все",
                        "oneColumn": "Одна колонка",
                        "twoColumns": "Две колонки",
                        "threeColumns": "Три колонки"
                    },
                    "timer": {
                        "autoUpdate": "Автообновление"
                    },
                    "refreshVersion": {
                        "newVersion": "Новая версия",
                        "refresh": "Обновить"
                    },
                    "loadingText": "Загрузка...",
                    "loadingError": "Ошибка загрузки данных",
                    "emptyUser": "<Сотрудник не найден>",
                    "catalogData": {
                        "indexFieldName": "№",
                        "history": {
                            "record": "Запись",
                            "action": "Действие",
                            "employee": "Сотрудник",
                            "allEmployers": "Все сотрудники"
                        },
                        "historyActions": {
                            "allActions": "Все действия",
                            "create": "Создание записей",
                            "update": "Изменение записей",
                            "remove": "Удаление записей",
                            "clearAll": "Очистить все",
                            "actions": "Действия"
                        },
                        "expandedQuickSearch": "🔎︎ Быстрый поиск",
                        "quickSearch": "🔎︎ Поиск",
                        "tooltip": {
                            "filterExpand": "Развернуть фильтр",
                            "filterCollapse": "Свернуть фильтр"
                        },
                        "types": {
                            "table": "Записи",
                            "cards": "Плитка",
                            "reports": "Отчеты",
                            "history": "Активность",
                            "statistics": "Подсчет",
                            "calendar": "Календарь"
                        },
                        "dropFieldHere": "Перетащите поле в эту область"
                    },
                    "helper": {
                        "searchResults": "Результаты поиска",
                        "title": "Подсказки",
                        "notFoundByLanguage": "Нет подсказок для выбранного языка",
                        "morePosts": "Дополнительные статьи",
                        "notFound": "Подсказки не найдены",
                        "all": "Все подсказки",
                        "searchText": "Поиск подсказок..."
                    },
                    "section": {
                        "search": "Поиск",
                        "menu": {
                            "property": "Свойства отдела",
                            "fixedMenuExpand": "Закрепить меню",
                            "fixedMenuCollapse": "Свернуть меню",
                            "create": "отдел",
                            "createCompany": "компанию"
                        }
                    },
                    "catalogEditor": {
                        "sectionPlaceholder": "Выберите отдел",
                        "namePlaceholder": "Введите название каталога",
                        "dragFieldToEditor": "Перетащите поле в анкету",
                        "field": {
                            "config": {
                                "code": {
                                    "title": "Код поля в API",
                                    "titleShort": "API:"
                                },
                                "edit": {
                                    "title": "Редактирование",
                                    "apiOnly": "Только через API",
                                    "visibleRules": "Заданы условия видимости"
                                }
                            },
                            "object": {
                                "namePlaceholder": "выбрать каталог или вид",
                                "fieldsPlaceholder": "дополнительно отображаемые поля"
                            },
                            "list": {
                                "item": {
                                    "remove": "Удалить значение"
                                },
                                "add": {
                                    "button": "Добавить",
                                    "placeholder": "+ добавить"
                                },
                                "emptyName": {
                                    "enterName": "Введите название"
                                }
                            },
                            "remove": "Удалить поле",
                            "lastItemWhenCollapsed": "изменить"
                        },
                        "namePlaceholderHint": "Добавить подсказку к полю",
                        "fieldProperties": {
                            "tabs": {
                                "properties": "Свойства",
                                "visibility": "Видимость"
                            },
                            "noFieldSelected": "Выберите поле, чтобы задать свойства",
                            "generalProperties": {
                                "section": "Общие свойства",
                                "name": "Название поля",
                                "hint": "Подсказка для заполнения",
                                "required": "✱ Обязательное поле"
                            },
                            "technicalProperties": {
                                "section": "Технические свойства",
                                "id": {
                                    "label": "API-ключ",
                                    "noValue": "[появится после сохранения каталога]"
                                },
                                "history": {
                                    "label": "",
                                    "value": "◷ Сохранять изменения в истории"
                                },
                                "filterable": {
                                    "label": "",
                                    "value": "🔎︎ Показывать на панели фильтров"
                                },
                                "apiOnly": {
                                    "label": "",
                                    "value": "Редактируемое только через API"
                                },
                                "comment": "Служебная заметка"
                            },
                            "visibleProperties": {
                                "section": "Условия видимости поля",
                                "needSave": {
                                    "title": "Новые поля пока не доступны",
                                    "text": "Сохраните каталог, чтобы новые поля стали доступны для условий видимости."
                                },
                                "needSelectResource": {
                                    "title": "Выбор поля пока не доступен",
                                    "text": "Выберите связанный каталог, чтобы поля стали доступны для условий видимости."
                                }
                            },
                            "configProperties": {
                                "section": "Параметры",
                                "field": {
                                    "text": {
                                        "type": {
                                            "label": "Тип поля",
                                            "items": {
                                                "text": "Текст",
                                                "masktext": "Текст по маске",
                                                "multiline": "Многострочный текст"
                                            }
                                        },
                                        "mask": {
                                            "label": "Маска ввода",
                                            "hint": "Служебные символы для задания маски:\n1 — любое число\nA — любая заглавная буква\na — любая строчная буква\n* — любая буква или число\nЛюбые другие символы считаются частью шаблона значения. Пример: AA**-1111"
                                        }
                                    },
                                    "number": {
                                        "min": "Минимальное значение",
                                        "max": "Максимальное значение",
                                        "unit": "Единица измерения"
                                    },
                                    "date": {
                                        "time": "С временем",
                                        "defaultValue": {
                                            "label": "",
                                            "value": "По умолчанию: текущая дата"
                                        }
                                    },
                                    "contact": {
                                        "type": {
                                            "label": "Назначение",
                                            "items": {
                                                "phone": "Телефон",
                                                "email": "Электронная почта",
                                                "site": "Сайт/ссылка"
                                            }
                                        }
                                    },
                                    "switch": {
                                        "defaultValue": {
                                            "label": "",
                                            "value": "По умолчанию: включен"
                                        }
                                    },
                                    "button": {
                                        "multiselect": {
                                            "label": "",
                                            "value": "Можно выбрать несколько кнопок"
                                        }
                                    },
                                    "address": {
                                        "token": {
                                            "label": "Токен сервиса Dadata.ru",
                                            "hint": "Поле адрес позволяет вводить адрес по номенклатурам КЛАДР и ФИАС. Список адресов получается со стороннего сервиса. Для доступа к сервису необходим ключ доступа — токен. Для получения токена зарегистрируйтесь на сайте dadata.ru"
                                        }
                                    },
                                    "dropdown": {
                                        "multiselect": {
                                            "label": "",
                                            "value": "Можно выбрать несколько значений"
                                        },
                                        "defaultValue": {
                                            "label": "",
                                            "value": "По умолчанию: первый элемент"
                                        }
                                    },
                                    "checkboxes": {
                                        "defaultValue": {
                                            "label": "",
                                            "value": "По умолчанию: первый элемент"
                                        }
                                    },
                                    "radiobutton": {
                                        "defaultValue": {
                                            "label": "",
                                            "value": "По умолчанию: первый элемент"
                                        }
                                    },
                                    "user": {
                                        "multiselect": {
                                            "label": "",
                                            "value": "Можно выбрать несколько сотрудников"
                                        },
                                        "defaultValue": {
                                            "label": "",
                                            "value": "По умолчанию: текущий сотрудник"
                                        },
                                        "subscribeAllChatMessages": {
                                            "label": "",
                                            "value": "Подписать на все сообщения в чате"
                                        }
                                    },
                                    "object": {
                                        "enableCreate": {
                                            "label": "",
                                            "value": "Можно создавать новые записи"
                                        },
                                        "enableSelect": {
                                            "label": "",
                                            "value": "Можно выбирать из существующих"
                                        },
                                        "multiselect": {
                                            "label": "",
                                            "value": "Можно связывать несколько записей"
                                        },
                                        "enableUnsaved": {
                                            "label": "",
                                            "value": "Создание без всплывающего окна"
                                        },
                                        "accessOnly": {
                                            "label": "",
                                            "value": "Выбирать только из доступных"
                                        }
                                    },
                                    "file": {
                                        "multiselect": {
                                            "label": "",
                                            "value": "Можно загрузить несколько файлов"
                                        }
                                    }
                                }
                            }
                        },
                        "fields": {
                            "collapse": "Свернуть",
                            "expand": "Развернуть"
                        }
                    },
                    "fieldTypes": {
                        "group": {
                            "name": "Секция",
                            "namePlaceholder": "Название секции"
                        },
                        "text": {
                            "name": "Текст",
                            "namePlaceholder": "Название поля",
                            "types": {
                                "text": "Текст",
                                "masktext": "Текст по маске",
                                "tel": "Телефон",
                                "mail": "Электронная почта",
                                "multiline": "Многострочный текст",
                                "script": "Код (скрипт)"
                            },
                            "mask": {
                                "placeholder": "Маска ввода",
                                "example": "Пример: 111-111",
                                "error": "Значение не соответствует формату",
                                "incorrectMask": "Проверьте корректность маски:\n1 — любое число\nA — любая заглавная буква\na — любая строчная буква\n* — любая буква или число\nЛюбые другие символы считаются частью шаблона значения. Пример: AA**-1111"
                            }
                        },
                        "contact": {
                            "name": "Контакт",
                            "namePlaceholder": "Название поля",
                            "types": {
                                "phone": "Телефон",
                                "email": "Электронная почта",
                                "site": "Сайт/ссылка"
                            },
                            "email": {
                                "error": "Неверный формат адреса электронной почты"
                            }
                        },
                        "address": {
                            "name": "Адрес",
                            "namePlaceholder": "Название поля",
                            "token": {
                                "name": "Токен сервиса Dadata.ru",
                                "placeholder": "токен dadata.ru",
                                "hint": "Для получения токена зарегистриуйтесь на сайте dadata.ru"
                            }
                        },
                        "number": {
                            "name": "Число",
                            "namePlaceholder": "Название поля",
                            "placeholder": "единица измерения",
                            "fromText": "От",
                            "toText": "До",
                            "min": {
                                "placeholder": "От",
                                "error": "Должно быть больше:"
                            },
                            "max": {
                                "placeholder": "До",
                                "error": "Должно быть меньше:"
                            },
                            "unit": {
                                "placeholder": "Единица измерения"
                            }
                        },
                        "date": {
                            "name": "Дата",
                            "namePlaceholder": "Название поля",
                            "withTime": "С временем",
                            "withNotify": "Автоматически создавать напоминание сотрудникам, отмеченным в поле",
                            "fromText": "От",
                            "toText": "До",
                            "fromRelativeText": "± X дней",
                            "toRelativeText": "± X дней",
                            "default": "По умолчанию: текущая дата"
                        },
                        "time": {
                            "name": "Время"
                        },
                        "switch": {
                            "name": "Переключатель",
                            "namePlaceholder": "Название поля",
                            "default": "По умолчанию: включен"
                        },
                        "button": {
                            "name": "Кнопка",
                            "namePlaceholder": "Название поля"
                        },
                        "dropdown": {
                            "name": "Статус",
                            "namePlaceholder": "Название поля",
                            "namePlaceholderItem": "+ вариант",
                            "multiselect": "Можно выбрать несколько",
                            "AddInCatalog": "Добавить в",
                            "removedCatalog": "Каталог удалён",
                            "default": "По умолчанию: первый элемент"
                        },
                        "checkboxes": {
                            "name": "Набор галочек",
                            "namePlaceholder": "Назание поля",
                            "default": "По умолчанию: первый элемент"
                        },
                        "radiobutton": {
                            "name": "Выбор значения",
                            "namePlaceholder": "Назание поля",
                            "default": "По умолчанию: первый элемент"
                        },
                        "progress": {
                            "name": "Прогресс",
                            "namePlaceholder": "Название поле",
                            "fromText": "От",
                            "toText": "До"
                        },
                        "stars": {
                            "name": "Оценка звездами",
                            "namePlaceholder": "Название поле"
                        },
                        "user": {
                            "name": "Сотрудник",
                            "namePlaceholder": "Название поле",
                            "multiselect": "Можно выбрать несколько",
                            "multiselectHint": "Можно выбрать несколько сотрудников",
                            "default": "По умолчанию: текущий сотрудник",
                            "subscribeAllChatMessages": "Подписать на все сообщения в чате",
                            "abbreviatedSubscribeAllChatMessages": "Подписать на"
                        },
                        "object": {
                            "name": "Связанный каталог",
                            "namePlaceholder": "Название поля",
                            "item": {
                                "label": "Выпадающий список с записями из другого каталога:",
                                "sourceLabel": "Каталог:",
                                "sourcePlaceholder": "Выберите источник",
                                "fieldsLabel": "Поля:",
                                "fieldsPlaceholder": "без расширенных полей",
                                "filterLabel": "Фильтр:",
                                "filterPlaceholder": "доступные значения зависят от другого поля каталога",
                                "filterNeedSave": "Требуется сначала сохранить каталог",
                                "filterHelp": "Фильтровать записи в выпадающем списке в зависимости от значения в поле карточки",
                                "rightsLabel": "Доступ:",
                                "previewLabel": "Пример:",
                                "previewRecordTitle": "Название выбранной записи",
                                "cannotChanged": "Все каталоги"
                            },
                            "mode": {
                                "label": "Вид",
                                "table": "Таблица",
                                "list": "Список",
                                "cards": "Карточки"
                            },
                            "addSource": "+ Добавить еще один связанный каталог",
                            "multiselect": "Можно связывать несколько записей",
                            "accessOnly": "Выбирать только из доступных",
                            "enableCreate": "Можно создавать новые записи в связанном каталоге",
                            "enableSelect": "Можно выбирать из существующих записей",
                            "enableUnsaved": "Создание без всплывающего окна"
                        },
                        "file": {
                            "name": "Файл",
                            "namePlaceholder": "Название поля",
                            "multiselect": "Можно загрузить несколько файлов",
                            "multiselectHint": "Можно загрузить несколько файлов"
                        }
                    },
                    "isRequired": "Обязательное поле",
                    "dropdown": {
                        "noitems": "<Пусто>",
                        "loading": "Загрузка..."
                    },
                    "modals": {
                        "icons": {
                            "groupName": {
                                "arrows": "Стрелки",
                                "business": "Бизнес",
                                "communication": "Коммуникации",
                                "content": "Контент",
                                "design": "Рисование",
                                "edition": "Редактирование",
                                "files": "Файлы",
                                "food": "Еда",
                                "hardware": "Оборудование",
                                "health": "Здоровье",
                                "interface": "Интерфейс",
                                "keyboard": "Клавиатура",
                                "leisure": "Отдых",
                                "multimedia": "Мультимедиа",
                                "objects": "Объекты",
                                "places": "Места",
                                "programing": "Программирование",
                                "setting": "Настройки",
                                "social": "Соцсети",
                                "status": "Статусы",
                                "text": "Текст",
                                "time": "Время",
                                "transfers": "Перемещение",
                                "transportation": "Транспорт",
                                "users": "Люди",
                                "vote": "Голосование",
                                "weather": "Погода"
                            }
                        },
                        "removeDashboard": {
                            "text": "Все данные этого дашборда будут удалены.",
                            "header": "Удалить дашборд?",
                            "okText": "Удалить",
                            "cancelText": "Отмена"
                        },
                        "removeIcon": {
                            "remove": "Убрать иконку"
                        },
                        "renameDashboard": {
                            "header": "Переименовать дашборд?",
                            "okText": "Сохранить",
                            "cancelText": "Отмена"
                        },
                        "removeRecordConfirm": {
                            "text": "Все данные этой записи будут также удалены.",
                            "header": "Удалить запись?",
                            "okText": "Удалить запись",
                            "cancelText": "Отмена"
                        },
                        "removeYourselfConfirm": {
                            "text": "Удалив себя из системы, вы потеряете к ней доступ.",
                            "header": "Вы удаляете себя из системы",
                            "okText": "Удалить",
                            "cancelText": "Отмена"
                        },
                        "changeYourselfConfirm": {
                            "text": "Изменив свой логин в системе, вы потеряете к ней доступ по предыдущему логину. Указав в виде логина эл. почту, вам придет повторное приглашение в систему, в противном случае не забудьте указать первичный пароль для входа, иначе вы потеряете доступ в систему.",
                            "header": "Вы изменяете свой логин в системе",
                            "okText": "Изменить",
                            "cancelText": "Отменить"
                        },
                        "createDashboard": {
                            "okText": "Создать",
                            "cancelText": "Отмена",
                            "placeHolder": "Название дашборда",
                            "header": "Создание дашборда",
                            "warning": "Созданный дашборд будет доступен только в текущем виде",
                            "advice": "Чтобы создать дашборд доступный во всех видах, создайте его в общем виде каталога."
                        },
                        "removeWidget": {
                            "header": "Удалить график?",
                            "text": "График будет удалён безвозвратно.",
                            "okText": "Удалить",
                            "cancelText": "Отмена"
                        },
                        "removeFieldConfirm": {
                            "text": "Все данные этого поля будут также удалены",
                            "header": "Удалить поле?",
                            "okText": "Удалить поле и данные",
                            "cancelText": "Отмена"
                        },
                        "removeFieldTabConfirm": {
                            "text": "Все поля этой вкладки будут перенесены в предыдущую вкладку",
                            "header": "Удалить вкладку?",
                            "okText": "Удалить вкладку",
                            "cancelText": "Отмена"
                        },
                        "removeDropdownItemConfirm": {
                            "text": "Это значение будет удалено из всех записей каталога",
                            "header": "Удалить значение?",
                            "okText": "Удалить значение и данные",
                            "cancelText": "Отмена"
                        },
                        "removeConfirm": {
                            "firstText": "Каталог и все его данные будут удалены.",
                            "secondText": "Для подтверждения удаления впишите его название в поле:",
                            "headerText": "Удалить каталог?",
                            "okText": "Удалить каталог и данные",
                            "cancelText": "Отмена"
                        },
                        "truncateConfirm": {
                            "firstText": "Все записи в каталоге будут удалены, включая историю, файлы и связи с другими записями. Нумерация в каталоге начнется сначала. Удаление в больших каталогах может занять несколько минут.",
                            "secondText": "Для подтверждения удаления записей впишите название каталога в поле:",
                            "headerText": "Очистить каталог?",
                            "okText": "Удалить все записи",
                            "cancelText": "Отмена"
                        },
                        "removeSectionConfirm": {
                            "firstText": "Отдел и все его каталоги будут удалены.",
                            "secondText": "Для подтверждения удаления впишите его название в поле:",
                            "headerText": "Удалить отдел?",
                            "okText": "Удалить отдел",
                            "cancelText": "Отмена"
                        },
                        "removeViewConfirm": {
                            "text": "Вид будет удален безвозвратно.",
                            "textForRights": "Вид будет удален безвозвратно. Сотрудники, которым он доступен, потеряют доступ до записей этого вида.",
                            "headerText": "Удалить вид?",
                            "okText": "Удалить",
                            "cancelText": "Отмена"
                        },
                        "removeTimeFromDateConfirm": {
                            "text": "Все даты будут сконвертированы с учетом вашего часового пояса. Для вас они останутся прежними, но для сотрудников в других часовых поясах могут сдвинутся. Продолжить?",
                            "headerText": "Конвертировать данные?",
                            "okText": "Конвертировать",
                            "cancelText": "Отмена"
                        },
                        "closeEditor": {
                            "text": "Вы изменили запись, но не сохранили её.<br />Если вы её закроете, изменения будут утеряны",
                            "textClear": "Все введенные данные будут утеряны",
                            "headerText": "Закрыть без сохранения?",
                            "headerTextClear": "Очистить форму?",
                            "okText": "Закрыть не сохраняя",
                            "okClear": "Очистить",
                            "cancelText": "Не закрывать",
                            "cancelClear": "Отменить"
                        },
                        "createSection": {
                            "headerText": "Создание отдела",
                            "inputPlaceHolder": "Название отдела"
                        },
                        "noCatalogName": {
                            "text": "Вы не задали имя каталога. Вы также можете выбрать и иконку.",
                            "headerText": "Задайти имя каталога",
                            "okText": "Задать"
                        },
                        "saveError": {
                            "text": "Что-то пошло не так.",
                            "headerText": "Ошибка сохранения каталога",
                            "okText": "Закрыть"
                        },
                        "moveCatalogError": {
                            "text": "Что-то пошло не так.",
                            "headerText": "Ошибка при перемещении каталога",
                            "okText": "Закрыть"
                        },
                        "recordSaveError": {
                            "text": "Что-то пошло не так.",
                            "headerText": "Ошибка сохранения записи",
                            "okText": "Закрыть"
                        },
                        "notImplemented": {
                            "text": "Все сотрудники имеют доступ до всей информации",
                            "headerText": "Ограничение доступа не реализовано",
                            "okText": "Закрыть"
                        },
                        "changeSectionName": {
                            "headerText": "Изменение названия отдела"
                        },
                        "createSectionError": {
                            "headerText": "Ошибка создания отдела",
                            "text": "Что-то пошло не так",
                            "okText": "Закрыть"
                        },
                        "createRecordError": {
                            "headerText": "Ошибка создания записи",
                            "text": "Что-то пошло не так",
                            "okText": "Закрыть"
                        },
                        "deleteRecordError": {
                            "headerText": "Ошибка удаления записи",
                            "text": "Что-то пошло не так",
                            "okText": "Закрыть"
                        },
                        "loadRecordError": {
                            "headerText": "Ошибка открытия записи",
                            "text": "Что-то пошло не так",
                            "okText": "Закрыть"
                        },
                        "schemaLock": {
                            "text": "В лицензии вашей компании нет права на изменение структуры каталогов. Возможно это временное ограничение, связанное с техническими работами.\n\nДля получения лицензии на право изменения структуры обратитесь к разработчикам системы.",
                            "headerText": "Изменение структуры запрещено",
                            "okText": "Закрыть"
                        },
                        "fieldRights": {
                            "header": "Право редактировать поля",
                            "stuffs": "Сотрудники компании",
                            "loading": "Обновление..."
                        },
                        "denied": {
                            "headerText": "Нет доступа",
                            "text": "У вас нет прав для совершения операции",
                            "okText": "Закрыть",
                            "record": {
                                "create": {
                                    "headerText": "Нет доступа",
                                    "text": "У вас нет прав для создания записи"
                                },
                                "update": {
                                    "headerText": "Нет доступа",
                                    "text": "У вас нет прав для изменения записи"
                                },
                                "read": {
                                    "headerText": "Нет доступа",
                                    "text": "У вас нет прав для просмотра информации"
                                },
                                "delete": {
                                    "headerText": "Нет доступа",
                                    "text": "У вас нет прав для удаления записи"
                                }
                            }
                        },
                        "notFound": {
                            "okText": "Закрыть",
                            "record": {
                                "headerText": "Запись не найдена",
                                "text": "Запись не существует или у вас нет прав на ее просмотр"
                            },
                            "catalog": {
                                "headerText": "Каталог не найден",
                                "text": "Каталог не существует или у вас нет прав на его просмотр"
                            }
                        },
                        "access": {
                            "header": "Общий доступ",
                            "stuffs": "Сотрудники компании",
                            "loading": "Обновление...",
                            "selectSubject": "Добавить сотрудника/группу",
                            "from": "от",
                            "inheritedFromSection": "Наследуется от отдела",
                            "inheritedFromCatalog": "Наследуется от каталога",
                            "errors": {
                                "adminPrivilegeRequired": "Необходимо дать право «Администрировать» хотя бы одному сотруднику."
                            },
                            "exception": {
                                "hide": "Скрыто",
                                "view": "Видеть",
                                "edit": "Изменять"
                            },
                            "byFields": "Права на поля",
                            "privilege": "Привилегия",
                            "privileges": {
                                "section": {
                                    "deny": "Запретить доступ",
                                    "admin": "Администрировать",
                                    "access": "Назначать права",
                                    "delete": "Удалять записи",
                                    "export": "Экспорт записей",
                                    "create": "Создавать записи",
                                    "edit": "Изменять все записи",
                                    "view": "Видеть все записи",
                                    "search": "Видеть отдел в меню",
                                    "available": "Доступ к разрешенным"
                                },
                                "catalog": {
                                    "deny": "Запретить доступ",
                                    "admin": "Администрировать",
                                    "access": "Назначать права",
                                    "delete": "Удалять записи",
                                    "export": "Экспорт записей",
                                    "create": "Создавать записи",
                                    "edit": "Изменять все записи",
                                    "view": "Видеть все записи",
                                    "search": "Видеть каталог в меню",
                                    "available": "Доступ к разрешенным"
                                },
                                "view": {
                                    "deny": "Запретить доступ",
                                    "admin": "Администрировать",
                                    "access": "Назначать права",
                                    "delete": "Удалять записи",
                                    "export": "Экспорт записей",
                                    "create": "Создавать записи",
                                    "edit": "Изменять записи",
                                    "view": "Видеть записи",
                                    "search": "Видеть вид в меню",
                                    "available": "Доступ к разрешенным"
                                },
                                "record": {
                                    "deny": "Запретить доступ",
                                    "admin": "Администрировать",
                                    "access": "Назначать права",
                                    "delete": "Удалять запись",
                                    "export": "Экспорт записи",
                                    "create": "Создавать запись",
                                    "edit": "Изменять запись",
                                    "view": "Видеть запись",
                                    "search": "Видеть в меню"
                                }
                            },
                            "publicAccess": {
                                "catalogHeader": "Веб-форма добавления записей",
                                "catalogModal": "Веб-форма просмотра каталога",
                                "recordHeader": "Веб-форма редактирования записи"
                            },
                            "headerSuffix": {
                                "section": " к отделу",
                                "catalog": " к каталогу",
                                "view": " к виду",
                                "record": " к записи"
                            }
                        },
                        "createNewView": {
                            "headerText": "Создание вида"
                        },
                        "editNewView": {
                            "headerText": "Изменить вид"
                        },
                        "save": "Сохранить",
                        "cancel": "Отменить",
                        "close": "Закрыть",
                        "thx": "Спасибо",
                        "helpHeader": "Как работать с системой",
                        "record": {
                            "success": {
                                "title": "Информация",
                                "okText": "Закрыть"
                            },
                            "changes": {
                                "title": "Информация",
                                "errorText": "Что-то пошло не так",
                                "okText": "Закрыть"
                            }
                        }
                    },
                    "record": {
                        "open": "Открыть",
                        "openModal": "Открыть в отдельной карточке",
                        "newRecord": "Заполните поля",
                        "newRecordCreated": "Сохранено",
                        "newRecordCreating": "Новая запись",
                        "emptyRecordName": "<Пусто>",
                        "tabs": {
                            "main": "Анкета",
                            "links": "Связи",
                            "history": "История",
                            "chat": "Чат"
                        },
                        "groupFields": {
                            "count_zero": "{{count}} полей",
                            "count_one": "{{count}} поле",
                            "count_two": "{{count}} поля",
                            "count_few": "{{count}} поля",
                            "count_many": "{{count}} полей",
                            "count_other": "{{count}} полей"
                        },
                        "groupRecords": {
                            "count_zero": "{{count}} записей",
                            "count_one": "{{count}} запись",
                            "count_two": "{{count}} записи",
                            "count_few": "{{count}} записи",
                            "count_many": "{{count}} записей",
                            "count_other": "{{count}} записей"
                        },
                        "users": {
                            "count_zero": "{{count}} сотрудников",
                            "count_one": "{{count}} сотрудник",
                            "count_two": "{{count}} сотрудника",
                            "count_few": "{{count}} сотрудников",
                            "count_many": "{{count}} сотрудников",
                            "count_other": "{{count}} сотрудников"
                        },
                        "values": {
                            "count_zero": "{{count}} значений",
                            "count_one": "{{count}} значение",
                            "count_two": "{{count}} значения",
                            "count_few": "{{count}} значения",
                            "count_many": "{{count}} значений",
                            "count_other": "{{count}} значений"
                        },
                        "fields": {
                            "text": {
                                "status": {
                                    "readyToSend": "Применить"
                                }
                            },
                            "file": {
                                "size": "Мб",
                                "remove": "Удалить файл",
                                "upload": "Загрузить...",
                                "attach": "Прикрепить...",
                                "drop": "или перетащите файл",
                                "download": "Скачать",
                                "create": "Создать"
                            },
                            "user": {
                                "addUser": "Выбрать..."
                            },
                            "object": {
                                "add": "Выбрать...",
                                "open": "Открыть карточку",
                                "delete": "Удалить связь",
                                "restore": "Восстановить"
                            },
                            "contact": {
                                "add": "Добавить",
                                "removed": "Удалено.",
                                "restore": "Восстановить",
                                "mailTo": "Написать",
                                "open": "Открыть",
                                "commentPlaceHolder": "описание",
                                "removeBtnTitle": "Удалить контакт"
                            },
                            "date": {
                                "now": "сейчас"
                            },
                            "code": {
                                "open": "Открыть во весь экран",
                                "editorTitle": "Редактор"
                            }
                        },
                        "linkedData": {
                            "loadMore": "+ Загрузить ещё",
                            "create": "Создать",
                            "openCatalog": "Открыть",
                            "noData": "Связанных данных нет",
                            "linkedCatalogOpen": "Раскрыть"
                        },
                        "attachFile": {
                            "headerTitle": "Прикрепить файл",
                            "enterUrl": "Введен некоректный URL-адрес",
                            "requiredParam": "обязательно",
                            "title": "Название файла",
                            "fileType": "Тип файла",
                            "url": "Ссылка",
                            "search": "Поиск",
                            "categories": {
                                "documents": "Документы",
                                "images": "Изображения",
                                "audioFiles": "Аудио-файлы",
                                "videoFiles": "Видео-файлы",
                                "drawings": "Чертежи",
                                "bpmn": "Бизнес-процессы",
                                "default": "Иной формат"
                            }
                        },
                        "actions": {
                            "save": "Сохранить",
                            "saving": "Сохранение...",
                            "saveError": "Ошибка сохранения",
                            "cancel": "Отмена",
                            "attach": "Прикрепить...",
                            "toAttach": "Прикрепить",
                            "close": "Закрыть"
                        },
                        "history": {
                            "title": "История",
                            "empty": "Нет записей",
                            "sendComment": "Написать",
                            "commentPlaceholder": "Написать комментарий...",
                            "unknown": "Неизвестно",
                            "type": {
                                "create": "Запись создана",
                                "delete": "Запись удалена"
                            },
                            "fieldName": "Комментарий"
                        },
                        "chat": {
                            "title": "Комментарии",
                            "hideComments": "Скрыть комментарии",
                            "disabledComments": "Комментарии можно писать после создания записи",
                            "subscribe": {
                                "notifications": "Следить"
                            },
                            "sendMessage": {
                                "placeholder": "Написать комментарий",
                                "enter": "Отправить",
                                "mention": {
                                    "currentRecord": "Текущая запись"
                                },
                                "resend": {
                                    "create": {
                                        "repeat": "Отправить повторно",
                                        "cancel": "Отменить отправку"
                                    },
                                    "edit": {
                                        "repeat": "Сохранить изменения повторно",
                                        "cancel": "Отменить изменение"
                                    },
                                    "delete": {
                                        "repeat": "Удалить повторно",
                                        "cancel": "Отменить удаление"
                                    }
                                }
                            },
                            "editMessage": {
                                "header": "Редактирование"
                            },
                            "message": {
                                "authorSystem": "Система",
                                "remove": "Удалить",
                                "messageDeleted": "Сообщение удалено",
                                "edit": "Редактировать",
                                "reply": "Ответить",
                                "copy": "Скопировать",
                                "attachments": {
                                    "count_zero": "файлов",
                                    "count_one": "файл",
                                    "count_two": "файла",
                                    "count_few": "файлов",
                                    "count_many": "файлов",
                                    "count_other": "файлов"
                                },
                                "unreadMessage": "Непрочитанные сообщения",
                                "edited": "изменено",
                                "emptyChats": "Сообщений нет, напишите первым..."
                            }
                        },
                        "copyrightPrefix": "Форма создана в ",
                        "addBtn": "Добавить",
                        "filter": {
                            "name": "Видимость полей",
                            "show": "Показать всё",
                            "hide": "Скрыть всё",
                            "removeTitle": "Все фильтры будут сброшенны"
                        },
                        "webform": {
                            "success": {
                                "message": "Форма отправлена",
                                "action": "Отправить новую форму"
                            }
                        }
                    },
                    "rights": {
                        "header": "Правовой вид",
                        "access": "Доступ",
                        "description": "Сотрудники с доступом к виду увидят записи, попадающие под фильтр. По умолчанию применяются права на вид. Сотрудники с правом изменять и выше смогут редактировать записи. С правом видеть — только просматривать. Эти права могут быть ограничены или расширены правилами на поля.",
                        "byField": "Расширенные правила редактирования полей",
                        "originName": "Название для администраторов",
                        "name": "Название для сотрудников",
                        "save": "Сохранить и дать доступ к виду",
                        "hide": "скрыто",
                        "view": "видеть",
                        "edit": "изменять",
                        "hint": "Документация"
                    },
                    "batchUpdateRecords": {
                        "title": "Изменить ",
                        "valueActions": {
                            "set": "Задать",
                            "exclude": "Исключить",
                            "add": "Добавить"
                        },
                        "buttons": {
                            "loading": "Загрузка ",
                            "update": "Изменить ",
                            "pause": "Остановить",
                            "resume": "Продолжить"
                        },
                        "tabs": {
                            "main": "Анкета",
                            "result": "Результат"
                        },
                        "form": {
                            "fields": {
                                "placeholder": "Задать значение",
                                "notChange": "Массово изменить невозможно"
                            }
                        },
                        "result": {
                            "description": {
                                "header": "Отчет",
                                "modified": "Изменено ",
                                "waitingTime": "Осталось "
                            },
                            "errors": {
                                "header": "Ошибки "
                            }
                        },
                        "confirmation": {
                            "headerText": "Подтвердите действие",
                            "text": "Вы действительно хотите изменить ",
                            "okText": "Подтвердить"
                        },
                        "recordsListTitle": "Изменить {{count}} из {{catalogName}}"
                    },
                    "batchDeleteRecords": {
                        "title": "Удалить ",
                        "buttons": {
                            "loading": "Загрузка ",
                            "delete": "Удалить ",
                            "pause": "Пауза",
                            "resume": "Возобновить удаление"
                        },
                        "result": {
                            "description": {
                                "deleted": "Удалено "
                            }
                        },
                        "confirmation": {
                            "headerText": "Удалить записи?",
                            "text": "Вы действительно хотите удалить ",
                            "okText": "Удалить записи",
                            "cancelText": "Отмена"
                        },
                        "notFoundRecords": "Выберите записи которые хотите удалить",
                        "recordsListTitle": "Удалить {{count}} из {{catalogName}}"
                    },
                    "import": {
                        "header": "Импорт из Excel",
                        "file": {
                            "uploadTypes": "XLS, XLSX, CSV",
                            "uploadInfo": "Перетащите файл в эту область",
                            "uploadOr": "или",
                            "uploadButton": "Загрузить файл",
                            "uploadCancel": "Отмена",
                            "uploadError": "Ошибка загрузки файла",
                            "uploadRetry": "Попробовать еще раз"
                        },
                        "progress": {
                            "indicator": {
                                "imported": "Импортировано: ",
                                "failed": "С ошибкой: ",
                                "parsedRecords": "Определено: ",
                                "parsedColumns": "Определено колонок: ",
                                "all": "Строк: "
                            },
                            "timer": {
                                "waitingTime": "Осталось"
                            }
                        },
                        "fields": {
                            "notSelected": "Не импортировать"
                        },
                        "errors": {
                            "record": {
                                "delete": "Ошибка удаления записи",
                                "create": "Ошибка импортирования записи"
                            },
                            "fields": {
                                "notSelected": "Правила сопоставления полей отсутствуют"
                            }
                        },
                        "closeEditor": {
                            "headerText": "Завершить импорт?",
                            "text": "Импорт не завершен. Если закрыть окно, установленные правила сопоставления полей будут утеряны.",
                            "okText": "Закрыть",
                            "cancelText": "Не закрывать"
                        },
                        "buttons": {
                            "importStop": "Пауза",
                            "importResume": "Продолжить",
                            "importStart": "Импортировать"
                        },
                        "key": {
                            "close": "Закрыть",
                            "importing": "Импортирование записей...",
                            "loading": "Загрузка..."
                        },
                        "statusField": {
                            "name": "Cтатус строки",
                            "items": {
                                "parsed": "Определено",
                                "failedToParse": "Ошибка определения",
                                "imported": "Импортировано",
                                "failedToImport": "Ошибка импорта",
                                "doNotImport": "Не импортировать",
                                "inProcess": "Обработка"
                            }
                        }
                    },
                    "filter": {
                        "header": "Фильтр",
                        "titles": {
                            "interval": {
                                "current": "Текущий период",
                                "past": "Прошлый период",
                                "future": "Будущий период"
                            }
                        },
                        "keys": {
                            "fixed": "Период дат",
                            "relative": "Период относительно сегодня",
                            "NULL_DATE": "Не задана",
                            "CURRENT_USER": "[Сотрудники.Я]",
                            "$EMPTY": "[Не задано]",
                            "$HAS": "[Задано]",
                            "has_from": "Задано из",
                            "TODAY_DATE": "Сегодня",
                            "TILL_TODAY_DATE": "Сегодня и ранее",
                            "THIS_WEEK_DATE": "Эта неделя",
                            "CURRENT_MONTH_DATE": "Этот месяц",
                            "THIS_YEAR_DATE": "Этот год",
                            "YESTERDAY_DATE": "Вчера",
                            "TILL_YESTERDAY_DATE": "Вчера и ранее",
                            "LAST_WEEK_DATE": "Прошлая неделя",
                            "LAST_30_DAYS_DATE": "Последние 30 дней",
                            "LAST_MONTH_DATE": "Прошлый месяц",
                            "LAST_365_DAYS_DATE": "Последние 365 дней",
                            "LAST_YEAR_DATE": "Прошлый год",
                            "CURRENT_DAY_DATE": "Этот день года",
                            "TOMORROW_DATE": "Завтра",
                            "TOMORROW_NEXT_DATE": "Завтра и далее",
                            "THIS_WEEK_TILL_TODAY_DATE": "Эта неделя (до сегодня)",
                            "THIS_WEEK_NEXT_TODAY_DATE": "Эта неделя (далее)",
                            "NEXT_WEEK_DATE": "Следующая неделя",
                            "NEXT_30_DAYS_DATE": "Следующие 30 дней",
                            "NEXT_MONTH_DATE": "Следующий месяц",
                            "NEXT_365_DAYS_DATE": "Следующие 365 дней",
                            "NEXT_YEAR_DATE": "Следующий год",
                            "$TRUE": "Да",
                            "$FALSE": "Нет"
                        },
                        "field": {
                            "removed": "[Удалено]"
                        },
                        "close": "Отменить фильтр",
                        "undefined": "[Не задано]"
                    },
                    "views": {
                        "list": {
                            "all": "Все",
                            "showRightViews": "Показать правовые виды"
                        },
                        "header": "виды",
                        "filters": "Фильтры",
                        "newView": "Новый вид",
                        "newPrivateView": "Сохранить как личный вид",
                        "renameView": "Переименовать",
                        "deleteView": "Удалить вид",
                        "modal": {
                            "headerTextSub": "Сохранённый набор фильтров для быстрого поиска записей",
                            "inputPlaceholder": "Название вида",
                            "labelForType": "Тип:",
                            "labelForRigthsView": "<b>Правовой:</b> дает доступ к выбранным записям другим сотрудникам",
                            "labelForPrivateView": "<b>Личный:</b> виден только вам",
                            "labelNameHint": "(если не задано, вид не будет отображаться для сотрудников)",
                            "saveViewAndSaveAccess": "Сохранить и задать права",
                            "createViewAndSaveAccess": "Создать и задать права"
                        }
                    },
                    "audioPlayer": {
                        "error": "Ошибка",
                        "download": "Скачать"
                    },
                    "multiModal": {
                        "open": "Открыть мультимодальное окно",
                        "close": "Закрыть мультимодальное окно",
                        "hideRecord": "Скрыть запись",
                        "catalog": "Каталог: ",
                        "record": " запись",
                        "records": " записи",
                        "manyRecords": " записей",
                        "alert": {
                            "title": "В мультимодальном окне нет записей.",
                            "text": "Добавьте какую-лиюо запись.",
                            "ok": "Ок"
                        }
                    },
                    "tab": {
                        "records": "Записи",
                        "activity": "Активность",
                        "history": "История",
                        "reports": "Отчеты"
                    },
                    "records": {
                        "cards": {
                            "config": {
                                "axisX": {
                                    "label": "Разложить по горизонтали:"
                                },
                                "axisY": {
                                    "label": "Разложить по вертикали:"
                                },
                                "color": {
                                    "label": "Подкрасить цветом:"
                                },
                                "sort": {
                                    "label": "Сортировать по:"
                                },
                                "sortDirection": {
                                    "values": {
                                        "1": "по возрастанию",
                                        "-1": "по убыванию"
                                    },
                                    "asc": "по возрастанию",
                                    "desc": "по убыванию"
                                },
                                "nothing": " "
                            },
                            "axis": {
                                "types": {
                                    "nothing": "Без разложения",
                                    "hour": "час",
                                    "hourOfDay": "час дня",
                                    "day": "день",
                                    "dayOfWeek": "день недели",
                                    "weekOfYear": "неделя года",
                                    "week": "неделя",
                                    "month": "месяц",
                                    "monthOfYear": "месяц года",
                                    "year": "год",
                                    "createdTime": "Дата создания",
                                    "id": "№ записи"
                                }
                            }
                        }
                    },
                    "reports": {
                        "buttons": {
                            "addWidget": "Добавить график",
                            "fullScreen": {
                                "close": "Свернуть",
                                "open": "Во весь экран"
                            }
                        },
                        "boards": {
                            "forView": "Дашборд-вида",
                            "forCatalog": "Дашборд-каталога",
                            "remove": "Удалить дашборд",
                            "rename": "Переименовать",
                            "create": "Создать"
                        },
                        "widget": {
                            "modals": {
                                "edit": {
                                    "title": "Настройка графика",
                                    "buttons": {
                                        "ok": "Сохранить"
                                    }
                                },
                                "create": {
                                    "title": "Создание графика",
                                    "buttons": {
                                        "ok": "Создать"
                                    }
                                },
                                "common": {
                                    "buttons": {
                                        "cancel": "Отменить",
                                        "remove": "Удалить"
                                    },
                                    "tabs": {
                                        "data": {
                                            "title": "Данные",
                                            "value": {
                                                "label": "Посчитать",
                                                "types": {
                                                    "recordsCount": "Количество записей",
                                                    "timeLeft": "продолжительность",
                                                    "timeBefore": "наступление",
                                                    "uniqueCount": "количество уникальных"
                                                },
                                                "functions": {
                                                    "sum": "сумма",
                                                    "max": "максимальное",
                                                    "min": "минимальное",
                                                    "avg": "среднее",
                                                    "avgAll": "среднее по всем"
                                                }
                                            },
                                            "axis": {
                                                "label": "Разложить по",
                                                "types": {
                                                    "nothing": "Без разложения",
                                                    "hour": "час",
                                                    "hourOfDay": "час дня",
                                                    "day": "день",
                                                    "dayOfWeek": "день недели",
                                                    "weekOfYear": "неделя года",
                                                    "week": "неделя",
                                                    "month": "месяц",
                                                    "monthOfYear": "месяц года",
                                                    "year": "год",
                                                    "createdTime": "Дата создания"
                                                },
                                                "emptyValue": "[не задано]",
                                                "multicolor": "Раскрасить значения"
                                            },
                                            "split": {
                                                "label": "Разбить по",
                                                "stacked": "Сложить значения"
                                            },
                                            "sort": {
                                                "label": "Сортировать по",
                                                "types": {
                                                    "axis": "Названию",
                                                    "value": "Значениям",
                                                    "asc": "По возрастанию",
                                                    "desc": "По убыванию"
                                                }
                                            },
                                            "records": {
                                                "label": "Учитывать",
                                                "types": {
                                                    "all": "Все записи каталога",
                                                    "available": "Только доступные сотруднику записи"
                                                }
                                            }
                                        },
                                        "filter": {
                                            "title": "Фильтр"
                                        }
                                    },
                                    "preview": {
                                        "demo": "Демонстрация",
                                        "type": "Вид",
                                        "namePlaceHolder": "Название графика",
                                        "types": {
                                            "lines": "Линия",
                                            "columns": "Столбцы",
                                            "bars": "Список",
                                            "pie": "Пирог",
                                            "radar": "Радар",
                                            "number": "Число",
                                            "table": "Таблица"
                                        }
                                    },
                                    "totals": {
                                        "sum": "всего",
                                        "avg": "в среднем"
                                    }
                                }
                            },
                            "common": {
                                "messages": {
                                    "axisNotSet": "Ось не выбрана",
                                    "noData": "Нет данных",
                                    "error": "Ошибка получения данных",
                                    "noLicense": "Доступно в платной версии модуля «Отчеты»",
                                    "noLicenseToSave": "Сохранение доступно в платной версии модуля «Отчеты»"
                                }
                            },
                            "buttons": {
                                "expand": "Развернуть",
                                "collapse": "Свернуть",
                                "options": {
                                    "downloadWidget": "Скачать изображение",
                                    "toExcel": "Выгрузить в excel",
                                    "edit": "Настроить"
                                }
                            },
                            "noName": "Без названия"
                        },
                        "shortDate": {
                            "years": "г",
                            "months": "м",
                            "days": "д",
                            "hours": "ч",
                            "minutes": "м",
                            "seconds": "с"
                        }
                    },
                    "calendar": {
                        "viewTabs": {
                            "today": "Сегодня",
                            "year": "Год",
                            "month": "Месяц",
                            "week": "Неделя",
                            "day": "День",
                            "allDay": "Весь день"
                        },
                        "config": {
                            "start": "Дата начала:",
                            "end": "Дата конца:",
                            "color": "Подкрасить цветом:",
                            "sortField": "Сортировать по:",
                            "layout": "Разложить по:",
                            "ascending": "по возрастанию",
                            "descending": "по убыванию",
                            "suggestRecords": "Записи без даты",
                            "groupingOptions": "Параметры группировки"
                        },
                        "month": {
                            "weekDays": {
                                "0": "Воскресенье",
                                "1": "Понедельник",
                                "2": "Вторник",
                                "3": "Среда",
                                "4": "Четверг",
                                "5": "Пятница",
                                "6": "Суббота"
                            }
                        },
                        "week": {
                            "weekDays": {
                                "0": " ВС",
                                "1": " ПН",
                                "2": " ВТ",
                                "3": " СР",
                                "4": " ЧТ",
                                "5": " ПT",
                                "6": " СБ"
                            },
                            "months": {
                                "0": " января",
                                "1": " февраля",
                                "2": " марта",
                                "3": " апреля",
                                "4": " мая",
                                "5": " июня",
                                "6": " июля",
                                "7": " августа",
                                "8": " сентября",
                                "9": " октября",
                                "10": " ноября",
                                "11": " декабря"
                            }
                        },
                        "suggestRecords": {
                            "header": "Без даты",
                            "loadMoreSuggestedRecords": "+ Загрузить ещё"
                        }
                    },
                    "message": {
                        "requiredFieldEmpty": "Обязательное поле не заполнено",
                        "fieldValueError": "Ошибка заполнения полей",
                        "createError": "Ошибка создания",
                        "saveError": "Ошибка сохранения"
                    },
                    "license": {
                        "records": {
                            "leftText": "Свободно записей: ",
                            "limitText": " из ",
                            "countText": "Создано: ",
                            "updateText": "Перерасчёт ежедневно"
                        }
                    },
                    "errors": {
                        "license": {
                            "records": "Превышено количество запсией в системе. Создавать новые запрещено. Расширьте лицензию.",
                            "catalogs": "Превышено количество разрешенных каталогов. Создавать записи в этом каталоге запрещено. Расширьте лицензию.",
                            "extUsersCatalogs": "Каталог не доступен для внешних пользователей. Расширьте лицензию."
                        }
                    },
                    "script": {
                        "common": {
                            "catalog": "Каталог",
                            "catalogId": "ID каталога",
                            "fileId": "ID файла",
                            "fieldId": "ID поля",
                            "fieldsId": "ID полей",
                            "recordId": "ID записи",
                            "script": "Сценарий",
                            "scriptId": "ID сценария",
                            "saveTo": "Сохранить в",
                            "saveAs": "Сохранить как",
                            "valuesFormat": "Формат значений",
                            "fieldsValue": "Значения полей",
                            "enterCatalog": "Указать каталог",
                            "fromList": "Из списка",
                            "fromVariables": "Через переменную",
                            "description": "Описание",
                            "title": "Название",
                            "general": "Общие свойства",
                            "fieldValue": "Поле = Значение",
                            "keyValue": "Ключ = Значение",
                            "fieldCondition": "Поле = Условие",
                            "json": "JSON-объект",
                            "valueFormat": "Формат значений",
                            "expression": "выражение",
                            "numberExpression": "номер / выражение",
                            "valueExpression": "значение / выражение",
                            "variableName": "имя переменной",
                            "variable": "переменная",
                            "result": "Результат",
                            "params": "Параметры",
                            "connectionString": "Строка подключения",
                            "yes": "Да",
                            "no": "Нет",
                            "field": "Поле",
                            "saveContent": "Сохранить содержимое в",
                            "saveUrl": "Сохранить URL файла в",
                            "data": "Данные",
                            "formatCatalog": "Файл из каталога",
                            "formatUrl": "URL к файлу",
                            "constant": "Константа"
                        },
                        "sidebar": {
                            "tabs": {
                                "properties": "Свойства",
                                "sandbox": "Песочница"
                            }
                        },
                        "controlls": {
                            "endEvent": {
                                "title": "Конец процесса"
                            },
                            "startEvent": {
                                "title": "Начало процесса"
                            },
                            "bpiumAdd": {
                                "title": "Создать запись",
                                "formatHint": "JSON объект в формате { \"ID-поля\": значение, ... }",
                                "outputHint": "Значение: объект { id, catalogId, title, values }"
                            },
                            "exclusiveGateway": {
                                "title": "Условие (шлюз «ИЛИ»)",
                                "defaultEmptyValue": "Шлюз «ИЛИ»"
                            },
                            "parallelGateway": {
                                "title": "Раздвоение (шлюз «И»)",
                                "defaultEmptyValue": "Шлюз «И»"
                            },
                            "errorEventDefinition": {
                                "title": "Ошибка",
                                "errorIn": "Сообщение ошибки в",
                                "errorCodeIn": "Код ошибки в"
                            },
                            "code": {
                                "title": "Код (javascript)",
                                "code": "Код",
                                "sourceHint": "Код возвращает результат через return",
                                "sourcePlaceholder": "javascript код",
                                "inputVariables": "Входные переменные"
                            },
                            "setvar": {
                                "title": "Назначение переменных",
                                "variables": "Переменные"
                            },
                            "sequenceFlow": {
                                "title": "Связь",
                                "condition": "Условие"
                            },
                            "intermediateCatchEvent": {
                                "title": "Таймер",
                                "timeoutName": "Пауза",
                                "timeout": "Таймаут",
                                "timeoutHint": "В формате ISO 8601: PT[часов]H[минут]M[секунд]S.\nПример для 10 секунд: PT10S"
                            },
                            "sqlRequest": {
                                "title": "SQL-запрос",
                                "connection": "Подключение",
                                "connectionType": "Тип базы данных",
                                "connectionMethod": "Способ подключения",
                                "serverAddress": "Адрес сервера",
                                "database": "База данных",
                                "login": "Логин",
                                "password": "Пароль",
                                "queryHint": "Формат: запрос с именными параметрами в формате :paramname (с двоеточием перед параметром)",
                                "requestParams": "Параметры запроса",
                                "outputHint": "Значение: массив объектов (строк) в формате [ { \"колонка\": \"значение\", ...}, ... ]",
                                "response": "Ответ",
                                "responseWait": "Ожидать ответа",
                                "request": "Запрос",
                                "param": "параметр"
                            },
                            "bpiumGetCatalog": {
                                "title": "Структура каталога",
                                "structure": "Получить структуру",
                                "getStructure": "Получить структуру каталога",
                                "fields": "Поля",
                                "allFields": "Все поля",
                                "setFields": "Заданные",
                                "outputHint": "Значение: каталог в API-формате { {id, title, fields: {}, ...} }",
                                "fieldsSpecifiedHint": "Значение: массив ID-полей\r\n[id, ...]"
                            },
                            "bpiumEdit": {
                                "title": "Изменить запись",
                                "outputPlaceholder": "Значение: объект { id, catalogId, title, values }",
                                "valuesHint": "JSON объект в формате { \"ID-поля\": значение, ... }"
                            },
                            "runProcess": {
                                "title": "Запуск процесса",
                                "sync": "Синхронно",
                                "async": "Асинхронно",
                                "asyncHint": "Синхронно запущенные процессы возвращают результат, но ограничены временем исполнения в 60 секунд",
                                "setScript": "Указать сценарий",
                                "run": "Запустить",
                                "runSubprocess": "Запуск подпроцесса",
                                "inputParams": "Входные параметры",
                                "param": "параметр",
                                "runMode": "Тип запуска",
                                "saveResponse": "Сохранить ответ в",
                                "saveProcessId": "Сохранить ID процесса в",
                                "outputResultHint": "Значение: объект в формате { \"выходной параметр\": значение, ... }"
                            },
                            "bpiumDelete": {
                                "title": "Удалить запись"
                            },
                            "bpiumCalculate": {
                                "title": "Подсчитать значение"
                            },
                            "parser": {
                                "title": "Парсер",
                                "find": "Найти",
                                "data": "Данные",
                                "searchMethod": "Метод поиска",
                                "jqSelector": "JQuery-селектор",
                                "searchString": "Поисковая строка",
                                "attr": "Атрибут",
                                "return": "Вернуть",
                                "returnValue": "Возвращаемое значение",
                                "firstElement": "Первый элемент",
                                "lastElement": "Последний элемент",
                                "allElements": "Все",
                                "itemHtml": "HTML элемента",
                                "itemText": "Текст элемента",
                                "itemValue": "Значение элемента (val)",
                                "item": "Элемент"
                            },
                            "bpiumGetRecord": {
                                "title": "Получить запись",
                                "outputHint": "Значение: запись в API-формате {id, title, values: {}, ...}",
                                "fieldsSpecifiedHint": "Значение: массив полей в API-формате\r\n[id, {fieldId: id, fields: {catalogId: [id, ...], ...}}, ... ]",
                                "get": "Получить",
                                "fields": "Поля",
                                "allFields": "Все поля",
                                "setFields": "Заданные"
                            },
                            "bpiumSendMessage": {
                                "title": "Отправить сообщение",
                                "messageText": "Текст",
                                "messageTextHint": "Для того чтобы упомянуть сотрудника в тексте, необходимо вставить в текст маску ввода: <@__ID сотрудника__;Имя сотрудника/@>. \n Пример текста с упоминанием: '<@__1__;Иван/@> привет!'",
                                "attachments": "Вложения",
                                "attachmentsHint": "Формат: [ { title: \"...\", url: \"https://...\" }, ... ].",
                                "outputHint": "",
                                "messageLocation": "Написать сообщение к записи",
                                "messageGroup": "Сообщение",
                                "replyMessageId": "Ответом на",
                                "replyMessageIdHint": "ID сообщения, на которое нужно ответить.",
                                "mentions": "Упомянуть",
                                "mentionsHint": "ID каталога и ID записи, которую нужно упомянуть. Чтобы упомянуть сотрудника, необходимо задать подобное значение: [ {catalogId: '$users', recordId: '1'}, ...] \nФормат произвольной записи: [ {catalogId: 1, recordId: 1}, ...].",
                                "author": "Автор",
                                "authorHint": "ID сотрудника из каталога сотрудников.",
                                "fieldsSpecifiedHint": "",
                                "allFields": "Все поля",
                                "setFields": "Заданные"
                            },
                            "webRequest": {
                                "title": "Веб-запрос",
                                "response": "Ответ",
                                "responseWait": "Ожидать ответа",
                                "request": "Запрос",
                                "method": "Метод",
                                "params": "Запрос (параметры)",
                                "paramsPlaceholder": "параметр",
                                "body": "Запрос (body)",
                                "headers": "Заголовки (headers)",
                                "header": "заголовок",
                                "query": "Адрес (URL)",
                                "dataType": "Тип данных",
                                "auth": "Авторизация",
                                "authWithout": "Без авторизации",
                                "authBasic": "Базовая авторизация",
                                "login": "Логин",
                                "password": "Пароль",
                                "token": "Токен",
                                "status": "Код HTTP-ответа в",
                                "answerFormat": "Формат ответа",
                                "binaryData": "Бинарные данные",
                                "text": "Текст",
                                "outputBody": "Ответ (body) в",
                                "outputHeaders": "Заголовки (headers) в",
                                "outputHeadersHint": "Значние: объект в формате {\"заголовок\": \"значение\"}",
                                "requestFormat": "Формат запроса",
                                "requestBody": "Тело запроса"
                            },
                            "getMail": {
                                "title": "Получение почты",
                                "flagTitle": "Категория писем",
                                "flag": {
                                    "all": "Все",
                                    "answered": "Отвеченные",
                                    "draft": "Черновик",
                                    "deleted": "Удаленные",
                                    "new": "Новые",
                                    "recent": "Недавнее",
                                    "unseen": "Непрочитанные",
                                    "unflagged": "Без флага"
                                },
                                "searchCriteria": "Критерии поиска писем",
                                "filterType": "Тип фильтра",
                                "standart": "Стандартный",
                                "custom": "Расширенный",
                                "filters": "Пользовательские фильтры",
                                "filtersHint": "Фильтры в формате: ['UNSEEN', ['FROM', 'June 2020']]",
                                "sentAfter": "Дата писем от",
                                "sentHint": "Дата в формате RFC или ISO. Например: 2005-08-09T18:31:42 ",
                                "sentBefore": "Дата писем до",
                                "rules": "Правила получения письма",
                                "markSeen": "Отметить письмо прочитанным",
                                "offset": "Порядковый номер",
                                "offsetHint": "Порядковый номер письма для получения в найденных по поисковым критериям письмах. Первое письмо имеет порядковый номер 0 (по умолчанию).",
                                "saveMessage": "Сохранить письмо в",
                                "saveCount": "Сохранить количество найденных писем в",
                                "attachments": "Вложения",
                                "skip": "Не получать",
                                "links": "Получить ссылки",
                                "buffer": "Получить содержимое",
                                "subject": "Тема",
                                "subjectHint": "Поиск по вхождению строки",
                                "sender": "Отправитель",
                                "login": "Логин",
                                "password": "Пароль",
                                "token": "Токен для подключения",
                                "host": "Адрес сервера",
                                "port": "Порт",
                                "protocol": "Протокол",
                                "connection": "Подключение",
                                "connectionType": "Способ подключения",
                                "encryption": "Шифрование",
                                "encrypted": "Использовать",
                                "plain": "Не использовать",
                                "encriptionselfsign": "Разрешать недоверенные сертификаты"
                            },
                            "convertDoc": {
                                "title": "Конвертер",
                                "dataSource": "Источник данных",
                                "methodName": "Вариант конвертации",
                                "methodHint": "На основе какого файла, и в какой файл будет происходить конвертация",
                                "source": "Источник",
                                "sourceCatalog": "Файл из записи",
                                "sourceUrl": "URL к файлу",
                                "templateData": "Данные для шаблона",
                                "sourceContent": "Содержимое",
                                "field": "Поле",
                                "content": "Содержимое",
                                "url": "URL файла",
                                "urlHint": "URL к файлу",
                                "jsonHint": "Объект с данными для подстановки в шаблон",
                                "saveCatalog": "Файл в запись",
                                "saveUrl": "URL в переменную",
                                "saveContent": "Содержимое в переменную",
                                "fieldHint": "Если в поле уже есть файл, то он будет замещен",
                                "constant": "Константа",
                                "fileName": "Имя файла",
                                "fileHint": "Не забудьте расширение файла (docx, xlsx, ...)"
                            },
                            "sendMail": {
                                "title": "Отправка почты",
                                "message": "Письмо",
                                "auth": "Авторизация",
                                "subject": "Тема",
                                "to": "Кому",
                                "toHint": "Формат: эл.почта или несколько через запятую",
                                "from": "От",
                                "fromHint": "Формат: \"mail@mail.com\" или \"Имя <mail@mail.com>\"",
                                "replyTo": "Ответить на",
                                "replyToHint": "Адрес почты, который подставится, если в почтовой программе нажать «Ответить». Если не указан, будет использован адрес «От».\nФормат: \"mail@mail.com\" или \"Имя <mail@mail.com>\"",
                                "inReplyTo": "Ответить на сообщение",
                                "inReplyToHint": "ID письма, в ответ на которое будет отправлено сообщение",
                                "includeProtocol": "Включая протокол",
                                "text": "Текст",
                                "saveMessage": "Вложения",
                                "bcc": "Скрытая копия",
                                "hiddenCopyHint": "Адрес почты, на который придет копия сообщения. \nФормат: \"first@mail.com, second@mail.com\"",
                                "saveAttachments": "Формат: массив с объектами вида [ { title: \"...\", url: \"https://...\" }, ... ]. Для отправки файлов из карточки записи, передайте значение поля с файлами.",
                                "saveAttachmentsHint": "Сохранить ID сообщения в",
                                "format": "Формат",
                                "formatText": "Простой текст (text/plain)"
                            },
                            "generateDoc": {
                                "title": "Сгенерировать документ",
                                "template": "Шаблон",
                                "templatePath": "Путь к шаблону",
                                "templateUrl": "URL шаблона",
                                "templateHint": "URL к файлу шаблона в формате docx или xlsx",
                                "jsonHint": "Объект с данными для подстановки в шаблон",
                                "fieldIdHint": "Если в поле уже есть файл, то он будет замещен",
                                "filename": "Имя файла",
                                "filenameHint": "Не забудьте расширение файла (docx, xlsx)",
                                "formatCatalog": "Файл в запись",
                                "formatUrl": "URL в переменную"
                            },
                            "bpiumFindRecords": {
                                "title": "Найти записи",
                                "receive": "Получить",
                                "view": "Вид",
                                "filter": "Фильтр",
                                "filterJsonHint": "JSON объект в формате { \"ID-поля\": условие, ... }",
                                "fieldsSpecifiedHint": "Значение: массив полей в API-формате\r\n[id, {fieldId: id, fields: {catalogId: [id, ...], ...}}, ... ]",
                                "limitHint": "API-параметр: limit. Максимум 1000 записей за раз",
                                "recordsCount": "Количество записей",
                                "outputHint": "Значение: массив записей в API-формате [ {id, title, values: {}, ...} ]",
                                "outputCount": "Всего подходящих записей в каталоге",
                                "outputCountHint": "Сколько всего записей в каталоге, удовлетворяющих условию",
                                "sort": "Сортировать по",
                                "offset": "Начиная с",
                                "sortAsc": "По возрастанию",
                                "sortDesc": "По убыванию",
                                "fields": "Поля",
                                "allFields": "Все поля",
                                "specifiedFields": "Заданные"
                            },
                            "bpiumFileUpload": {
                                "title": "Загрузить файл",
                                "field": "Поле",
                                "fieldIdHint": "Если в поле уже есть файл, то он будет замещен",
                                "fileIdHint": "ID файла для последующего сохранения в поле записи",
                                "file": "Файл",
                                "fileUrl": "Загрузить по URL",
                                "fileData": "Сгенерировать файл",
                                "fileContent": "Содержание файла",
                                "filename": "Имя файла",
                                "filenameHint": "Имя файла для отображения в системе. Не забудьте расширение.",
                                "formatCatalog": "Файл в запись",
                                "formatId": "Вернуть ID файла"
                            }
                        },
                        "sandbox": {
                            "fields": {
                                "sectionContext": {
                                    "name": "Контекст"
                                },
                                "processId": {
                                    "name": "Скопировать из процесса",
                                    "hint": "Скопировать в контекст входные значения из недавно запущенного процесса"
                                },
                                "context": {
                                    "name": "Объект с переменными",
                                    "hint": "Объект {var1, ...} с переменными, которые будут доступны внутри кода"
                                },
                                "sectionCode": {
                                    "name": "Проверка кода"
                                },
                                "source": {
                                    "name": "Код",
                                    "hint": "Исходный код, который будет исполнен с учетом котекста"
                                },
                                "result": {
                                    "name": "Результат",
                                    "hint": "Результат исполнения кода"
                                }
                            }
                        }
                    },
                    "companies": {
                        "myCompanies": "Мои компании"
                    }
                }
            }
        },
        "language": "ru",
        "languages": [
            "ru"
        ],
        "resolvedLanguage": "ru"
    },
    "tReady": true
}
