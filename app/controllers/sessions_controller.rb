class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)

    if @user
      login(@user)
      render "api/users/show"
    else
      render :json @user.errors.full_messages, status: 422
    end
  end

  def show

  end

  def destroy

  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
