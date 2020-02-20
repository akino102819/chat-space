# README

## groups
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :users, through: :grpups_users

## messages
|Column|Type|Options|
|------|----|-------|
|body|text|NULL|
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

### Association
- has_many :messages
- has_many :groups, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
