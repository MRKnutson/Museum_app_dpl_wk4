class Api::ArtifactsController < ApplicationController
  before_action :set_exhibit
  before_action :set_artifact, only: [:show, :update, :destroy]

  def index
    render json: @exhibit.artifacts
  end

  def show
    render json: @artifact
  end

  def create
    @artifact = @exhibit.artifacts.new(artifact_params)
    if (@artifact.save)
      render json: @artifact
    else
      render json: {errors: @artifact.errors}, status: 422
    end
  end

  def update
    if (@artifact.update(artifact_params))
      render json: @artifact
    else
      render json: {errors: @artifact.errors}, status: 422
    end
  end

  def destroy
    render json: @artifact.destroy
  end

  private
  
  def set_exhibit
    @exhibit = Exhibit.find(params[:exhibit_id])
  end

  def set_artifact
    @artifact = @exhibit.artifacts.find(params[:id])
  end

  def artifact_params
    params.require(:artifact).permit(:name, :discovered, :condition)
  end
end
