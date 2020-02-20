# README

## groups
|Column|Type|Options|
|------|----|-------|
|groups_users_id|integer|null: false, foreign_key: true|
|massages_id|integer|null: false, foreign_key: true|

### Association
- has_many :massages
- has_many :groups_users


## massages
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|NULL|
|group_id|integer|null: false foreign_key: true|
|user_id|integer|null: false foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## users
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unipue: true|
|email|string|null: false, unipue: true|
|password|string|null: false|
|massages_id|integer|null:false, foreign_key: true|
|groups_users_id|integer|null:false, foreign_key: true|

### Association
- has_many :massages
- has_many :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
