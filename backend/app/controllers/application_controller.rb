class ApplicationController < ActionController::API
    def ok
        render json: { ok: true }
    end
end
