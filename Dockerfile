FROM nginx:latest

COPY ./dist/product-ui /usr/share/nginx/html


COPY ./nginx.conf /etc/ngnix/nginx.conf
COPY ./site.conf /etc/nginx/conf.d/default.conf


## add permissions
RUN     chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
		
USER nginx
