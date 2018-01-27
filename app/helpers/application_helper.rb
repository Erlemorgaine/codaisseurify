module ApplicationHelper
  def sortable(column, title = nil)
    title ||= column.titleize
    direction = (column == params[:order] && params[:direction] == "asc") ? "desc" : "asc"
    link_to title, :order => column, :direction => direction
  end
end
