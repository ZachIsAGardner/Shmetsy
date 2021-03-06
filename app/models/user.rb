class User < ApplicationRecord

  attr_reader :password

  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token!

  has_one :shop,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'Shop'

  has_many :cartings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Carting'

  has_many :listings, through: :shop

  has_many :cart_items, through: :cartings, source: :listing

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username);

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    save!
    self.session_token
  end

  private

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
