# README

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|users_group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## massage_groups
|Column|Type|Options|
|------|----|-------|
|massage_id|integer|null: false, foreign_key: true|
|massages_group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :massage
- belongs_to :group


## groups
|Column|Type|Options|
|------|----|-------|
|users_group_id|integer|null: false, foreign_key: true|
|massages_group_id|integer|null: false, foreign_key: true|

### Association
- has_many :massages
- has_many :users


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
|encrypted_password|string|null: false, foreign_key: true|
|massages_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|

### Association
- has_many :massages
- has_many :groups
