class Api::ExhibitsController < ApplicationController
  before_action :set_exhibit, only: [:show, :update, :destroy]



  def index
    render json: Exhibit.all
  end

  def show
    render json: @exhibit
  end

  def create 
    @exhibit=Exhibit.new(exhibit_params)
    if (@exhibit.save)
      render json: @exhibit
    else
      render json: { errors: @exhibit.errors }, status: :unprocessable_entity
    end
  end

  def update
    if (@exhibit.update(exhibit_params))
      render json: @exhibit
    else
      render json: { errors: @exhibit.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @exhibit.destroy
  end



  private
  
  def exhibit_params
    params.require(:exhibit).permit(:area, :circa)
  end

  def set_exhibit
    @exhibit=Exhibit.find(params[:id])
  end


end
