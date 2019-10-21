class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :edit]
  def index
    @boards = Board.all
  end

  def show
    @board = Board.find(params[:id])
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy
    redirect_to boards_path
  end

  def new
    @board = Board.new
  end

  def create
    board = Board.create(board_strong_params)
    redirect_to board_path(board)
  end

  def edit
  end

  def update
    # raise
    board = Board.find(params[:id])
    board.update(board_strong_params)
    redirect_to board_path(board)
  end

  private

  def board_strong_params
    params.require(:board).permit(:name, :firstspanish, :firstenglish, :secondspanish, :secondenglish, :thirdspanish, :thirdenglish, :fourthspanish, :fourthenglish, :fifthspanish, :fifthenglish, :sixthspanish, :sixthenglish, :seventhspanish, :seventhenglish, :eighthspanish, :eighthenglish, :ninthspanish, :ninthenglish)
  end

  def set_board
    @board = Board.find(params[:id])
  end
end
