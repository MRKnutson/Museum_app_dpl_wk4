class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    @item=Item.new(item_params)
    if(@item.save)
      render json: @item
    else
      render json: {errors: @item.errors}, status: 422
    end
  end

  def update
    if(@item.update(item_params))
      render json: @item
    else
      render json: {errors: @item.errors}, status: 422
    end
  end

  def destroy
    render json: @item.destroy
  end


  private

  def set_item
    @item=Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
